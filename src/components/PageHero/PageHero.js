import "./PageHero.scss";
import downArrow from "../../assets/icons/down-arrow.png";

const PageHero = () => {
  return (
    <section className="page">
      <div className="page__hero">
        <h2 className="page__hero-header">
          Clothing fabric <br></br> composition <br></br>checker
        </h2>
        <div className="page__hero-container">
          <h4 className="page__hero-text">
            A quick, easy tool so you can make informed decisions before making
            your next fashion purchase. Input the composition of a clothing item
            below to find further details and advice on the sustainibility of
            the product.
          </h4>
        </div>

        <div>
          <img
            className="page__hero-down"
            src={downArrow}
            alt="downwards arrow icon"
          ></img>
        </div>
      </div>
    </section>
  );
};

export default PageHero;
