import { SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';

function Swiper_news(props) {
  return (
    
      <SwiperSlide><div className='news'>{ props.textNews }</div></SwiperSlide>
  );
};

export default Swiper_news;