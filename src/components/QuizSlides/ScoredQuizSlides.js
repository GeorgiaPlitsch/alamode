import "./QuizSlides.scss";
import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import RecQuizSlides from "./RecQuizSlides";
import backArrow from "../../assets/icons/back-arrow-pink.svg";

const ScoredQuizSlides = (props) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState([]);

  const questions = props.questions;
  const recQuestions = props.recQuestions;

  const onAnswerClick = (questionScore) => {
    setScores([...scores, questionScore]);
    setCurrentQuestion(currentQuestion + 1);
  };

  const onBackButton = () => {
    if (currentQuestion === 0) {
      return;
    }

    setCurrentQuestion(currentQuestion - 1);
    scores.splice(-1, 1);
  };

  if (currentQuestion === questions.length) {
    return (
      <RecQuizSlides
        questions={recQuestions}
        score={scores.reduce((prev, current) => prev + current, 0)}
      />
    );
  }

  const answers = questions[currentQuestion].answers.map((answer) => (
    <button
      key={uuid()}
      className="quiz__answers-button"
      onClick={() => onAnswerClick(answer.answerScore)}
    >
      {answer.answerText}
    </button>
  ));

  return (
    <div ref={props.refProp} className="quiz">
      <div className="quiz__question">
        <h2 className="quiz__question-count">Question {currentQuestion + 1}</h2>

        <div className="quiz__container">
          <h3 className="quiz__question-text">
            {questions[currentQuestion].questionText}
          </h3>

          <div className="quiz__answers">{answers}</div>
          <div className="quiz__back" onClick={onBackButton}>
            <img src={backArrow} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScoredQuizSlides;
