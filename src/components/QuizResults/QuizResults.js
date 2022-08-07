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
        <h4 className="results__score-text">
          Based on your current fashion consumption, you scored {score}%
        </h4>
      </div>

      <div className="results__rec">
        <h3 className="results__rec-heading">Your suggested next step...</h3>
        <div>
          <h4 className="results__rec-name">{reccomendation.suggestion}</h4>
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
