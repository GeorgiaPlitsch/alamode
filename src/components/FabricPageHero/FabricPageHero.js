import "./FabricPageHero.scss";
import downArrow from "../../assets/icons/down-arrow.png";

const FabricPageHero = () => {
  return (
    <>
      <div className="fabricHero">
        <h2 className="fabricHero__header">
          Clothing fabric <br></br> composition <br></br>checker
        </h2>
        <div className="fabricHero__container">
          <h4 className="fabricHero__text">
            A quick, easy tool so you can make informed decisions before making
            your next fashion purchase. Input the composition of a clothing item
            below to find further details and advice on the sustainibility of
            the product.
          </h4>
        </div>

        <div>
          <img
            className="fabricHero__down"
            src={downArrow}
            alt="downwards arrow icon"
          ></img>
        </div>
      </div>
    </>
  );
};

export default FabricPageHero;
