import "./QuizSlides.scss";
import React, { useState } from "react";
import RecQuizSlides from "./RecQuizSlides";

const ScoredQuizSlides = (props) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = props.questions;
  const recQuestions = props.recQuestions;

  const handleAnswerClick = (questionScore) => {
    setScore(score + questionScore);
    setCurrentQuestion(currentQuestion + 1);
  };

  if (currentQuestion === questions.length) {
    return <RecQuizSlides questions={recQuestions} score={score} />;
  }

  const answers = questions[currentQuestion].answers.map((answer) => (
    <button onClick={() => handleAnswerClick(answer.answerScore)}>
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

export default ScoredQuizSlides;
