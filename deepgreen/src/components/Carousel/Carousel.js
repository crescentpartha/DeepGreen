import React from 'react';
import useSlides from '../../hooks/useSlides';

// import Swiper core and required modules
import { Navigation, Pagination, A11y } from 'swiper';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Slider from './Slider';

const Carousel = () => {
    const [slides] = useSlides();
    return (
        <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            navigation
            pagination={{ clickable: true }}
            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
        >
            {slides.map(slide => <SwiperSlide
                key={slide.id}
                className="bg-info"
            ><Slider slide={slide}></Slider></SwiperSlide>
            )}
        </Swiper>
    );
};

export default Carousel;