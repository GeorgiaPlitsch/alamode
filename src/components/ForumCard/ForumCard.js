import { Link } from "react-router-dom";
import "./ForumCard.scss";
import React, { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

const ForumCard = (props) => {
  const post = props.post;
  const postId = post.id;

  return (
    <article className="forumCard">
      <h3>{post.postTitle}</h3>
      <p>{post.authorName}</p>
      <p>{post.postDate}</p>
    </article>
  );
};

export default ForumCard;
