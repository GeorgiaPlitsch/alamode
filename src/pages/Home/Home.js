import "./Home.scss";
import downArrow from "../../assets/icons/down-arrow.png";

const Home = () => {
  return (
    <section className="home">
      <div className="home__hero">
        <h2 className="home__hero-header">
          Start making responsible <br></br> fashion choices <br></br>today.
        </h2>

        <button className="home__hero-button">
          <h4>THE SUSTAINIBILTY QUIZ</h4>
        </button>

        <div>
          <img className="home__hero-down" src={downArrow}></img>
        </div>
      </div>
    </section>
  );
};

export default Home;
