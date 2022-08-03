import "./BrowseArticles.scss";
import Carousel from "better-react-carousel";

const BrowseArticles = (props) => {
  const items = [];

  props.articles.forEach((article) => {
    if (!article) {
      return;
    }

    items.push(
      <Carousel.Item cols={2}>
        <div className="browse__carousel-image">
          <img width="100%" src={article.image} />
        </div>
        <h4 className="browse__carousel-header">{article.title}</h4>
      </Carousel.Item>
    );
  });

  const MyDot = ({ isActive }) => (
    <span
      style={{
        display: "inline-block",
        height: isActive ? "8px" : "5px",
        width: isActive ? "8px" : "5px",
        background: "#e76f51",
      }}
    ></span>
  );

  return (
    <section className="browse">
      <h3 className="browse__header">Browse articles...</h3>

      <Carousel
        mobileBreakpoint={767}
        showDots
        dot={MyDot}
        cols={1}
        rows={1}
        gap={16}
        loop
      >
        {items}
      </Carousel>
    </section>
  );
};

export default BrowseArticles;
