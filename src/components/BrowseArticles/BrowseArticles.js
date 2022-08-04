import "./BrowseArticles.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

const BrowseArticles = (props) => {
  const items = [];

  props.articles.forEach((article) => {
    if (!article) {
      return;
    }
    items.push(
      <SwiperSlide className="browse__carousel-item">
        <div className="browse__carousel-image">
          <img width="100%" src={article.image} />
        </div>
        <h4 className="browse__carousel-header">{article.title}</h4>
      </SwiperSlide>
    );
  });

  return (
    <section className="browse">
      <h3 className="browse__header">Browse articles...</h3>
      <Swiper
        slidesPerView={"auto"}
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
        {items}
      </Swiper>
    </section>
  );
};

export default BrowseArticles;
