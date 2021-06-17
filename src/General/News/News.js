import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

import data from './News_data.json'

import SwiperCore, {
  Pagination,Navigation,EffectCube
} from 'swiper/core';
SwiperCore.use([Pagination,Navigation,EffectCube]);

function News() {
  return (
    <Swiper
    spaceBetween={50}
    slidesPerView={1}
    navigation={true}
    pagination={{
      "clickable": true
    }}
    loop={true}
    effect={'cube'} grabCursor={true} cubeEffect={{
      "shadow": true,
      "slideShadows": true,
      "shadowOffset": 20,
      "shadowScale": 0.94
    }}
    className='mySwiper'
  >
    
      {data.map((item) => (
        <SwiperSlide>
        <div className='news'>
          <img src={item.image} />
          <span>{item.textNews}</span>
        </div>
        </SwiperSlide>
      ))}
  </Swiper>
  );
}

export default News;