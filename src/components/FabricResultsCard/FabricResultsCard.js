const FabricResultsCard = (props) => {
  if (!props.fabric) {
    return;
  }

  return (
    <article>
      <h1>{props.fabric.name}</h1>
      <p>{props.fabric.information}</p>
    </article>
  );
};

export default FabricResultsCard;
