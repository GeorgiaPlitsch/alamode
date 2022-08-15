import { Link } from "react-router-dom";
import "./ArticleCard.scss";
import React, { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

const ArticleCard = (props) => {
  const article = props.article;
  const articleId = article.id;

  return (
    <article className="articleCard">
      <img className="articleCard__img" src={article.image}></img>
      <Link to={`/articles/${articleId}`}>
        <h3 className="articleCard__title">{article.title}</h3>
      </Link>
    </article>
  );
};

export default ArticleCard;
