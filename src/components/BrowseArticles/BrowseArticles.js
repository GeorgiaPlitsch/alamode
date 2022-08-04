import "./BrowseArticles.scss";

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
        <div>
          <img width="100%" src={article.image} />
        </div>
        <h4>{article.title}</h4>
      </SwiperSlide>
    );
  });

  articles.shift();

  return (
    <section className="browse">
      <h3 className="browse__header">Browse articles...</h3>
      <Swiper
        slidesPerView={1.7}
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
