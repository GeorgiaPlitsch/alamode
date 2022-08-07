import "./QuizPageHero.scss";
import downArrow from "../../assets/icons/down-arrow.png";

const QuizPageHero = () => {
  return (
    <>
      <div className="quizHero">
        <h2 className="quizHero__header">
          Sustainibility <br></br> Quiz
        </h2>
        <div className="quizHero__container">
          <h4 className="quizHero__text">
            Take the quick sustainability quiz to measure how your current
            fashion consumption habits score on sustainability and to get
            personalised reccomendations on how to improve your impact."
          </h4>
        </div>

        <div>
          <img
            className="quizHero__down"
            src={downArrow}
            alt="downwards arrow icon"
          ></img>
        </div>
      </div>
    </>
  );
};

export default QuizPageHero;
