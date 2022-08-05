import "./QuizSlides.scss";
import React, { useEffect, useState } from "react";

const QuizSlides = (props) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const questions = props.questions;

  const handleAnswerClick = (questionScore) => {
    setScore(score + questionScore);
  };

  const nextQuestion = (currentQuestion) => {
    currentQuestion++;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResults(true);
    }
  };

  console.log(questions);
  console.log(currentQuestion);
  console.log(questions[currentQuestion].questionText);

  return (
    <div className="quiz">
      {showResults ? (
        <div className="quiz__score">You scored {score}%</div>
      ) : (
        <>
          <div className="quiz__question">
            <p className="quiz__question-count">
              Question {currentQuestion + 1}
            </p>
            <div className="quiz__question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="quiz__answer-section">
            {questions[currentQuestion].answers.map((answer) => (
              // <button onClick={() => handleAnswerClick(answer.answerScore)}>
              //   {answer.answerText}
              // </button>
              <button>{answer.answerText}</button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default QuizSlides;