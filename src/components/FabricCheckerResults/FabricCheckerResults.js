import { v4 as uuid } from "uuid";

const FabricCheckerResults = (props) => {
  const cards = [];

  props.fabricDetails.forEach((fabric) => {
    if (!fabric) {
      return;
    }

    cards.push(
      <article key={uuid}>
        <h3>{fabric.name}</h3>
        <p>{fabric.information}</p>
      </article>
    );
  });

  return <div>{cards}</div>;
};

export default FabricCheckerResults;
