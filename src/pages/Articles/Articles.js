import ArticleCard from "../../components/ArticleCard/ArticleCard";
import { v4 as uuid } from "uuid";
import "./Articles.scss";
import * as Api from "../../Api/Api.js";
import React, { useEffect, useState } from "react";
import filterIcon from "../../assets/icons/filter.png";

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
      <div className="articles__container">
        <h2 className="articles__header">Articles</h2>
        {/* placeholder icon for filter articles functionality to be implemented in sprint 2 */}
        <img className="articles__filter" src={filterIcon} />
      </div>
      <div className="articles__cards">{cards}</div>
    </section>
  );
};

export default Articles;
