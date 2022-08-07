import "./NewestArticle.scss";
import React, { useState } from "react";

const NewestArticle = (props) => {
  let article = props.allArticles[0];
  if (!article) {
    return;
  }
  return (
    <section className="newestArticle">
      <h3 className="newestArticle__header">New...</h3>
      <div>
        <img className="newestArticle__img" src={article.image}></img>
        <h5 className="newestArticle__title">{article.title}</h5>
      </div>
    </section>
  );
};

export default NewestArticle;
