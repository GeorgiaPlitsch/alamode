import "./QuizSlides.scss";
import React, { useState } from "react";
import QuizResults from "../QuizResults/QuizResults";

const RecQuizSlides = (props) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [result, setResult] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const questions = props.questions;
  const score = props.score;

  const handleAnswerClick = (result) => {
    if (currentQuestion === 0) {
      findRecQuestion(result);
    } else {
      setResult(result);
      setShowResults(true);
    }
  };

  const findRecQuestion = (answerResult) => {
    const recQuestion = questions.findIndex(
      (question) => question.id === answerResult
    );
    setCurrentQuestion(recQuestion);
  };

  const answers = questions[currentQuestion].answers.map((answer) => (
    <button onClick={() => handleAnswerClick(answer.resultId)}>
      {answer.answerText}
    </button>
  ));

  if (showResults) {
    return <QuizResults score={score} result={result} />;
  }

  return (
    <div className="quiz">
      <div className="quiz__question">
        <h3 className="quiz__question-count">Question {currentQuestion + 6}</h3>
        <div className="quiz__question-text">
          {questions[currentQuestion].questionText}
        </div>
      </div>
      <div className="quiz__answer-section">{answers}</div>
    </div>
  );
};

export default RecQuizSlides;
