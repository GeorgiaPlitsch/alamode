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
      <article className="articles__article">
        <img className="articles__article-img" src={article.image}></img>
        <h3 className="articles__article-title">{article.title}</h3>
        {/* <p className="articles__article-description">{article.description}</p> */}
      </article>
    );
  });

  return <div className="articles">{cards}</div>;
};

export default Articles;
