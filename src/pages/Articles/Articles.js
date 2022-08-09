import ArticleCard from "../../components/ArticleCard/ArticleCard";
import { v4 as uuid } from "uuid";
import "./Articles.scss";
import * as Api from "../../Api/Api.js";
import React, { useEffect, useState } from "react";

// TODO filter articles feature

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
    cards.push(<ArticleCard key={uuid()} article={article} />);
  });

  return (
    <section className="articles">
      <h2 className="articles__header">Articles</h2>
      <div className="articles__cards">{cards}</div>
    </section>
  );
};

export default Articles;
