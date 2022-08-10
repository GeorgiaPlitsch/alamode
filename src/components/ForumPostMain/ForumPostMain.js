import "./ForumPostMain.scss";
import React, { useEffect, useState } from "react";

const ForumPostMain = (props) => {
  const post = props.post;

  const responses = post.postResponses;
  const numberOfPosts = responses.length + 1;

  return (
    <article className="forumPostMain">
      <h3 className="forumPostMain__title">{post.postTitle}</h3>
      <div className="forumPostMain__container">
        <p>{post.postDate}</p>
        <p>{post.authorName}</p>
      </div>
      <p>{post.postBody}</p>
    </article>
  );
};

export default ForumCard;
