import "./ForumPost.scss";
import * as Api from "../../Api/Api.js";
import React, { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import { useHistory } from "react-router-dom";
import ForumPostMain from "../../components/ForumPostMain/ForumPostMain";
import ForumPostResponse from "../../components/ForumPostResponse/ForumPostResponse";
import backArrow from "../../assets/icons/back-arrow-pink.svg";

const ForumPost = (props) => {
  const [post, setPost] = useState();
  const history = useHistory();

  useEffect(() => {
    Api.getForumPost(props.match.params.id).then((result) => {
      setPost(result);
    });
  }, []);

  if (!post) {
    return <p>Loading...</p>;
  }

  const postReplies = [];

  post.postResponses.forEach((response) => {
    if (!response) {
      return;
    }
    postReplies.push(<ForumPostResponse key={uuid()} reply={response} />);
  });

  return (
    <section className="forumPost">
      <div className="forumPost__head">
        <img
          src={backArrow}
          onClick={() => history.go(-1)}
          alt="back arrow icon"
          className="forumPost__back"
        />
        <h3 className="forumPost__title">{post.postTitle}</h3>
      </div>
      <div className="forumPost__main">
        <ForumPostMain post={post} />
      </div>
      <div className="forumPost__replies">{postReplies}</div>
    </section>
  );
};

export default ForumPost;
