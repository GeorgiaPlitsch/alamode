import "./BrowseArticles.scss";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

const BrowseArticles = (props) => {
  const articles = [];

  props.articles.forEach((article) => {
    if (!article) {
      return;
    }
    articles.push(
      <SwiperSlide>
        <Link to={`/articles/${article.id}`}>
          <div>
            <img width="100%" src={article.image} />
          </div>
          <h4 className="browse__carousel-title">{article.title}</h4>
        </Link>
      </SwiperSlide>
    );
  });

  articles.shift();

  return (
    <section className="browse">
      <h3 className="browse__header">Browse articles...</h3>
      <Swiper
        slidesPerView={1.2}
        spaceBetween={24}
        grabCursor={true}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="browse__carousel"
      >
        {articles}
      </Swiper>
    </section>
  );
};

export default BrowseArticles;
