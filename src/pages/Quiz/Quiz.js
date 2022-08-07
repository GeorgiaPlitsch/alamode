import "./Quiz.scss";
import * as Api from "../../Api/Api.js";
import React, { useEffect, useState } from "react";
import QuizPageHero from "../../components/QuizPageHero/QuizPageHero";
import ScoredQuizSlides from "../../components/QuizSlides/ScoredQuizSlides";

const Quiz = () => {
  const [scoredQuestions, setScoredQuestions] = useState([]);
  const [recQuestions, setRecQuestions] = useState([]);

  useEffect(() => {
    Api.getScoredQuestions().then((result) => {
      setScoredQuestions(result);
    });
  }, []);

  useEffect(() => {
    Api.getRecQuestions().then((result) => {
      setRecQuestions(result);
    });
  }, []);

  if (scoredQuestions.length === 0) {
    return <div>LOADING...</div>;
  }

  return (
    <>
      <QuizPageHero />
      <ScoredQuizSlides
        questions={scoredQuestions}
        recQuestions={recQuestions}
      />
    </>
  );
};

export default Quiz;
