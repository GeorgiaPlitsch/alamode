import "./QuizSlides.scss";
import React, { useState } from "react";

const RecQuizSlides = (props) => {
  const [Question, setQuestion] = useState(0);
  const [Result, setResult] = useState(0);

  const questions = props.questions;
  const score = props.score;

  const handleAnswerClick = () => {
    setResult(question.resultId);
  };

  const answers = questions[currentQuestion].answers.map((answer) => (
    <button onClick={() => handleAnswerClick(answer.answerScore)}>
      {answer.answerText}
    </button>
  ));

  return (
    //   <div className="quiz">
    //     <div className="quiz__question">
    //       <p className="quiz__question-count">Question {currentQuestion + 1}</p>
    //       <div className="quiz__question-text">
    //         {questions[currentQuestion].questionText}
    //       </div>
    //     </div>
    //     <div className="quiz__answer-section">{answers}</div>
    //   </div>
    <>
      <p>piu</p>
      <p>piu</p>
      <p>piu</p>
      <p>piu</p>
      <p>piu</p>
      <p>piu</p>
      <p>piu</p>
      <p>piu</p>
      <p>piu</p>
      <p>piu</p>
      <p>piu</p>
      <p>piu</p>
    </>
  );
};

export default RecQuizSlides;
