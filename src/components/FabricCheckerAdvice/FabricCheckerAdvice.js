import "./FabricCheckerAdvice.scss";

const FabricCheckerAdvice = () => {
  return (
    <article className="advice">
      <div className="advice__container">
        <h3 className="advice__header">Other considerations...</h3>
        <h5 className="advice__about">
          Remember that although it's ideal to only buy the most sustainable
          fabrics, it's not the only factor to consider.
        </h5>
        <h5 className="advice__about">
          Sometimes an item made from not so eco-friendly materials may still be
          the right option or a seemingly sustainable item may not be the best
          choice.
        </h5>
      </div>
      <div className="advice__container-text">
        <p className="advice__text">
          • Is the item well constructed and of high quality?
        </p>
      </div>
      <div className="advice__container-text">
        <p className="advice__text">
          • Is there a more sustainable alternative that's still accessible to
          you?
        </p>
      </div>
      <div className="advice__container-text">
        <p className="advice__text">
          • Is it an item you see yourself wearing for years to come? Or is it
          an occassion piece? If so, check whether it's available to rent via -
          <a className="advice__link" href="https://byrotation.com/">
            ByRotation
          </a>
        </p>
      </div>
      <div className="advice__container-text">
        <p className="advice__text">
          • Have you checked whether the item is available to buy second-hand?
          Check on -
          <a className="advice__link" href="https://www.depop.com/">
            Depop
          </a>
        </p>
      </div>
    </article>
  );
};

export default FabricCheckerAdvice;
