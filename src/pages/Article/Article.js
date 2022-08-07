import "./Article.scss";
import * as Api from "../../Api/Api.js";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import backArrow from "../../assets/icons/back-arrow-pink.svg";

const Article = (props) => {
  const id = props.match.params.id;
  const [article, setArticle] = useState([]);
  const history = useHistory();

  useEffect(() => {
    Api.getArticle(id).then((result) => {
      setArticle(result);
    });
  }, []);

  //   const articleText = article.text;
  //   const articleTextParagraphs = [];

  //   console.log(articleText);

  //   articleText.forEach((paragraph) => {
  //     if (!paragraph) {
  //       return;
  //     }
  //     articleTextParagraphs.push(<p>{paragraph}</p>);
  //   });

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
        <div className="article__text">{article.text}</div>
      </div>
    </section>
  );
};

export default Article;
