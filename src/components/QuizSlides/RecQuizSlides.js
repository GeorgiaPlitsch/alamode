import "./QuizSlides.scss";
import React, { useState } from "react";

const RecQuizSlides = (props) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [Result, setResult] = useState(0);

  const questions = props.questions;
  const score = props.score;

  const handleAnswerClick = (result) => {
    if (currentQuestion === 0) {
      findRecQuestion(result);
    } else {
      setResult(result);
      return (
        <>
          <p>results</p>
          <p>results</p>
          <p>results</p>
          <p>results</p>
        </>
      );
    }
  };

  const findRecQuestion = (answerResult) => {
    const filteredQuestion = questions.findIndex(
      (question) => question.id === answerResult
    );
    setCurrentQuestion(filteredQuestion);
  };

  const answers = questions[currentQuestion].answers.map((answer) => (
    <button onClick={() => handleAnswerClick(answer.resultId)}>
      {answer.answerText}
    </button>
  ));

  return (
    <div className="quiz">
      <div className="quiz__question">
        <p className="quiz__question-count">Question {currentQuestion + 1}</p>
        <div className="quiz__question-text">
          {questions[currentQuestion].questionText}
        </div>
      </div>
      <div className="quiz__answer-section">{answers}</div>
    </div>
  );
};

export default RecQuizSlides;
