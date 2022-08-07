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
    <>
      <p>piu</p>
      <p>piu</p>
      <p>piu</p>
      <p>piu</p>
    </>
  );
};

export default QuizResults;
