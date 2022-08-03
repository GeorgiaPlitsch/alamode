import "./HomeHero.scss";
import downArrow from "../../assets/icons/down-arrow.png";

const HomeHero = () => {
  return (
    <section className="home">
      <div className="home__hero">
        <h2 className="home__hero-header">
          Start making responsible <br></br> fashion choices <br></br>today.
        </h2>

        <button className="home__hero-button">
          <h4>TAKE THE SUSTAINIBILTY QUIZ</h4>
        </button>

        <div>
          <img
            className="home__hero-down"
            src={downArrow}
            alt="downwards arrow icon"
          ></img>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
