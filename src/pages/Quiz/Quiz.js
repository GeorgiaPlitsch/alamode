import "./Quiz.scss";
import * as Api from "../../Api/Api.js";
import React, { useEffect, useState } from "react";

const Quiz = () => {
  useEffect(() => {
    Api.getQuestions().then((result) => {
      setQuestions(result);
    });
  }, []);
};

export default Quiz;
