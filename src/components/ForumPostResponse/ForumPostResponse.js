import "./ForumPostResponse.scss";
import React, { useEffect, useState } from "react";

const ForumPostResponse = (props) => {
  const post = props.post;

  const responses = props.reply;

  return (
    <article className="forumPostMain">
      <div className="forumPostMain__details">
        <p>
          {responses.responseDate}
          <br></br>
          <br></br>
          {responses.responseName}
        </p>
        <div className="forumPostMain__image"></div>
      </div>
      <p className="forumPostMain__body">{responses.responseBody}</p>
    </article>
  );
};

export default ForumPostResponse;
