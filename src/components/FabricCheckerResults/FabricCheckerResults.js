import { v4 as uuid } from "uuid";
import "./FabricCheckerResults.scss";

const FabricCheckerResults = (props) => {
  const cards = [];

  props.fabricDetails.forEach((fabric) => {
    if (!fabric) {
      return;
    }

    cards.push(
      <article className="results__result" key={uuid}>
        <div className="results__result-container">
          <h3 className="results__result-header">{fabric.name}</h3>
          <p className="results__result-text">{fabric.information}</p>
        </div>
      </article>
    );
  });
  return <section className="results">{cards}</section>;
};

export default FabricCheckerResults;
