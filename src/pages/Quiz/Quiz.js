import "./Quiz.scss";
import * as Api from "../../Api/Api.js";
import React, { useEffect, useState } from "react";
import QuizSlides from "../../components/QuizSlides/QuizSlides";

const Quiz = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    Api.getQuestions().then((result) => {
      setQuestions(result);
    });
  }, []);

  if (!questions) {
    return;
  }

  return (
    <>
      <QuizSlides questions={questions} />
    </>
  );
};

export default Quiz;
