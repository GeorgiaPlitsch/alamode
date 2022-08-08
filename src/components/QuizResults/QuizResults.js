import "./QuizResults.scss";
import * as Api from "../../Api/Api.js";
import React, { useState, useEffect } from "react";

const QuizResults = (props) => {
  const score = props.score;
  const result = props.result;

  const [reccomendation, setReccomendation] = useState([]);

  useEffect(() => {
    Api.getResult(result).then((res) => {
      setReccomendation(res);
    });
  }, []);

  console.log(reccomendation);

  return (
    <section className="results">
      <div className="results__score">
        <h3>Based on your current fashion consumption, you scored:</h3>
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
          </p>
          <img className="results__rec-icon" src={reccomendation.icon}></img>
        </div>
      </div>
    </section>
  );
};

export default QuizResults;
