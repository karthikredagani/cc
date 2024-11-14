import React from 'react';
import Slider from 'react-slick';
import './FurnitureCarousel.css';

const FurnitureCarousel = () => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 800,
    slidesToShow: 5,
    slidesToScroll: 8,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3, // Scroll 3 items at a time on mobile
        },
      },
    ],
  };

  const categories = [
    { name: "Sofas", imageUrl: "/images/cor1.jpg" },
    { name: "Dining Sets", imageUrl: "/images/cor2.jpg" },
    { name: "Storage & Organization", imageUrl: "/images/cor3.jpg" },
    { name: "Kitchen Storage & Furniture", imageUrl: "/images/cor4.jpg"},
    { name: "Bathroom Storage", imageUrl: "/images/cor5.jpg" },
    { name: "Chairs", imageUrl: "/images/cor6.jpg" },
    { name: "Beds", imageUrl: "/images/cor7.jpg" },
    { name: "Mattress", imageUrl: "/images/cor8.jpg" },
    { name: "Work Desks", imageUrl: "/images/cor9.jpg" },
    { name: "Children Storage and Furniture", imageUrl: "/images/cor10.jpg" },
  ];

  return (
    <div className="carousel-container">
      <h2 className='cou'>Top furniture categories</h2>
      <Slider {...settings}>
        {categories.map((category, index) => (
          <div key={index} className="carousel-item">
            <img src={category.imageUrl} alt={category.name} className="category-image" />
            <p className="category-name">{category.name}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FurnitureCarousel;
