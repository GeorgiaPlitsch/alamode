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
    <button
      className="quiz__answers-button"
      onClick={() => handleAnswerClick(answer.answerScore)}
    >
      <p>{answer.answerText}</p>
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
        </div>
      </div>
    </div>
  );
};

export default ScoredQuizSlides;
