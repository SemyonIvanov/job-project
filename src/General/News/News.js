import Swiper_news from "./News_content/Swiper_news";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';

import data from './News_data.json'

function News() {
  return (
    <Swiper
    spaceBetween={50}
    slidesPerView={1}
  >
    
      {data.map((item) => (
        <SwiperSlide>
        <div className='news' style={{ background: `center url(${item.image}) no-repeat` }}>
          <span>{item.textNews}</span>
        </div>
        </SwiperSlide>
      ))}
  </Swiper>
  );
}

export default News;