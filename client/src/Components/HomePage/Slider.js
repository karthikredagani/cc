import React from 'react';
import Slider from 'react-slick';
import './Slider.css';

const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, 
        pauseOnHover: true,
};

const SliderComponent = () => (
    <div className="slider-container">
        <div className='slide'>
        <Slider {...sliderSettings}>
            <div className="slide-item"><img src="/images/f1.jpg" alt="Slide 1" /></div>
            <div className="slide-item"><img src="/images/f2.jpg" alt="Slide 2" /></div>
            <div className="slide-item"><img src="/images/f3.jpg" alt="Slide 3" /></div>
            <div className="slide-item"><img src="/images/f4.jpg" alt="Slide 4" /></div>
            <div className="slide-item"><img src="/images/f5.jpg" alt="Slide 5" /></div>
            <div className="slide-item"><img src="/images/f6.jpg" alt="Slide 6" /></div>
            <div className="slide-item"><img src="/images/f7.jpg" alt="Slide 7" /></div>
            <div className="slide-item"><img src="/images/f8.jpg" alt="Slide 8" /></div>
            {/* <div className="slide-item"><img src="/images/6.jpg" alt="Slide 6" /></div> */}
        </Slider>
        </div>
        {/* <div className='sale'><img className="sale-banner" src="/images/sale.jpg" alt="Sale Banner" /></div> */}
    </div>
);

export default SliderComponent;
