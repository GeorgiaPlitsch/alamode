import "./Articles.scss";
import * as Api from "../../Api/Api.js";
import React, { useEffect, useState } from "react";

const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    Api.getArticles().then((result) => {
      setArticles(result);
    });
  }, []);

  const cards = [];

  articles.forEach((article) => {
    if (!articles) {
      return;
    }
    cards.push(
      <article>
        <h3>{article.title}</h3>
        <p>{article.author}</p>
        <img src={article.image}></img>
      </article>
    );
  });

  return <div>{cards}</div>;
};

export default Articles;
