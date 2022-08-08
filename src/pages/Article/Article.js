import "./Article.scss";
import * as Api from "../../Api/Api.js";
import React, { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import { useHistory } from "react-router-dom";
import backArrow from "../../assets/icons/back-arrow-pink.svg";

const Article = (props) => {
  const [article, setArticle] = useState();
  const history = useHistory();

  useEffect(() => {
    const id = props.match.params.id;

    Api.getArticle(id).then((result) => {
      setArticle(result);
    });
  }, []);

  if (!article) {
    return <p>Loading...</p>;
  }

  const articleTextParagraphs = [];

  article.text.forEach((paragraph) => {
    if (!paragraph) {
      return;
    }
    articleTextParagraphs.push(<p key={uuid()}>{paragraph}</p>);
  });

  return (
    <section className="article">
      <div className="article__header">
        <img
          src={backArrow}
          alt="back arrow icon"
          className="article__back"
          onClick={() => history.go(-1)}
        />
        <h2 className="article__title">{article.title}</h2>
      </div>
      <div className="article__body">
        <h4>- {article.author}</h4>
        <img className="article__image" src={`${article.image}`} />
        <div className="article__text">{articleTextParagraphs}</div>
      </div>
    </section>
  );
};

export default Article;
