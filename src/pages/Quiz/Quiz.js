import "./Quiz.scss";
import * as Api from "../../Api/Api.js";
import React, { useEffect, useState, useRef } from "react";
import QuizPageHero from "../../components/QuizPageHero/QuizPageHero";
import ScoredQuizSlides from "../../components/QuizSlides/ScoredQuizSlides";

// TODO quiz back button functionality

const Quiz = () => {
  const [scoredQuestions, setScoredQuestions] = useState([]);
  const [recQuestions, setRecQuestions] = useState([]);
  const contentDivRef = useRef();

  const handleClick = () => {
    contentDivRef.current?.scrollIntoView({ behavior: "smooth" });
  };
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
      <QuizPageHero buttonClick={handleClick} />
      <ScoredQuizSlides
        refProp={contentDivRef}
        questions={scoredQuestions}
        recQuestions={recQuestions}
        sentFromBack={false}
      />
    </>
  );
};

export default Quiz;
