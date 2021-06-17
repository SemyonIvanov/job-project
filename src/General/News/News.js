import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import SwiperCore, { Pagination, Navigation, EffectCube } from 'swiper/core';

SwiperCore.use([Pagination, Navigation, EffectCube]);

function News(props) {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      loop={true}
      effect={'cube'}
      grabCursor={true}
      cubeEffect={{
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      }}
      className="mySwiper"
    >
      {props.news.map((itemNews) => (
        <SwiperSlide>
          <div className="news">
            <img src={itemNews.image} />
            <span>{itemNews.textNews}</span>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default News;
