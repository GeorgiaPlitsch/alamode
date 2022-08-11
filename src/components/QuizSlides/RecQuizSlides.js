import "./QuizSlides.scss";
import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import QuizResults from "../QuizResults/QuizResults";
import backArrow from "../../assets/icons/back-arrow-pink.svg";
//import ScoredQuizSlides from "./ScoredQuizSlides";

const RecQuizSlides = (props) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [result, setResult] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [backToScoredQ, setBackToScoredQ] = useState(false);

  const questions = props.questions;
  const score = props.score;
  const scoreArray = props.scoreArray;
  const questionsForBack = props.questionsForBack;

  scoreArray.splice(-1, 1);

  const handleAnswerClick = (result) => {
    if (currentQuestion === 0) {
      findRecQuestion(result);
    } else {
      setResult(result);
      setShowResults(true);
    }
  };

  console.log(currentQuestion);

  const onBackButton = () => {
    if (currentQuestion === 0) {
      // setBackToScoredQ(true);
      return;
    } else {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const findRecQuestion = (answerResult) => {
    const recQuestion = questions.findIndex(
      (question) => question.id === answerResult
    );
    setCurrentQuestion(recQuestion);
  };

  const answers = questions[currentQuestion].answers.map((answer) => (
    <button
      key={uuid()}
      className="quiz__answers-button"
      onClick={() => handleAnswerClick(answer.resultId)}
    >
      {answer.answerText}
    </button>
  ));

  if (showResults) {
    return <QuizResults score={score} result={result} />;
  }

  // if (backToScoredQ) {
  //   return (
  //     <ScoredQuizSlides
  //       sentFromBack={true}
  //       scoreFromBack={scoreArray}
  //       questions={questionsForBack}
  //     />
  //   );
  // }

  return (
    <div className="quiz">
      <div className="quiz__question">
        <h2 className="quiz__question-count">Question {currentQuestion + 6}</h2>
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

export default RecQuizSlides;
