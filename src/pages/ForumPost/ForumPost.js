import "./ForumPost.scss";
import * as Api from "../../Api/Api.js";
import React, { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import { useHistory } from "react-router-dom";
import backArrow from "../../assets/icons/back-arrow-pink.svg";

const ForumPost = (props) => {
  const [post, setPost] = useState();
  const history = useHistory();

  useEffect(() => {
    const id = props.match.params.id;

    Api.getForumPost(id).then((result) => {
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
    postReplies.push(<forumPostResponse key={uuid()} reply={response} />);
  });

  return (
    <section className="forumPost">
      <forumPostMain post={post} />
      <div>{postReplies}</div>
    </section>
  );
};

export default ForumPost;
