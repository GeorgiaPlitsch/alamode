import "./Article.scss";
import * as Api from "../../Api/Api.js";
import React, { useEffect, useState } from "react";

const Article = (props) => {
  const id = props.match.params.id;
  const [article, setArticle] = useState([]);

  useEffect(() => {
    Api.getArticle(id).then((result) => {
      setArticle(result);
    });
  }, []);

  return (
    <section className="article">
      <h2 className="article__title">{article.title}</h2>
      <h4>- {article.author}</h4>
      <img className="article__image" src={`${article.image}`}></img>
      <p className="article__text">{article.text}</p>
    </section>
  );
};

export default Article;
