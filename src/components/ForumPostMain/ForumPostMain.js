import "./ForumPostMain.scss";
import React, { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

const ForumPostMain = (props) => {
  const post = props.post;
  const postId = post.id;

  const responses = post.postResponses;
  const numberOfPosts = responses.length + 1;

  return (
    <article className="forumCard">
      <h3 className="forumCard__title">{post.postTitle}</h3>
      <div className="forumCard__container">
        <p>{post.postDate}</p>
        <p>{numberOfPosts} posts</p>
      </div>
    </article>
  );
};

export default ForumCard;
