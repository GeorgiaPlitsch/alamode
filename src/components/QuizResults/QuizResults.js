import "./QuizResults.scss";
import * as Api from "../../Api/Api.js";
import React, { useState, useEffect, useRef } from "react";
import downArrow from "../../assets/icons/down-arrow.png";
import { Link } from "react-router-dom";

const QuizResults = (props) => {
  const score = props.score;
  const result = props.result;

  const [reccomendation, setReccomendation] = useState([]);

  //const contentDivRef = useRef();

  // const onRender = () => {
  //   const section = document.querySelector("results-section");
  //   section.scrollIntoView({ behavior: "smooth", block: "start" });
  // };

  useEffect(() => {
    Api.getResult(result).then((res) => {
      setReccomendation(res);
    });
  }, []);

  // useEffect(() => {
  //   if (!reccomendation) {
  //     return <p>Loading...</p>;
  //   }
  //   onRender();
  // }, []);

  return (
    <section id="results-section" className="results">
      <div className="results__score">
        <h3>Based on your current fashion consumption, your rating is:</h3>
        <div className="results__score-container">
          <h2 className="results__score-text">{score}%</h2>
        </div>
      </div>
      <h2 className="results__rec-heading">Your next step...</h2>
      <div className="results__rec">
        <h4 className="results__rec-name">{reccomendation.suggestion}</h4>
        <div className="results__rec-container">
          <p className="results__rec-description">
            {reccomendation.description}
            <br></br> <br></br>
            <Link to={`/articles/${reccomendation.articleId}`}>
              <h5> Read more here</h5>
            </Link>
          </p>
          <a
            classsName="results__rec-a"
            href={reccomendation.site}
            target="_blank"
          >
            <img className="results__rec-icon" src={reccomendation.icon}></img>{" "}
          </a>
        </div>
      </div>
    </section>
  );
};

export default QuizResults;
