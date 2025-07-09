// CarouselItem.jsx
import React from "react";
import "./CarouselItem.css";

const CarouselItem = ({ imgUrl, imgTitle, artist, date, price }) => {
  return (
    <div className="carousel-card">
      <div className="carousel-card-image-wrapper">
        <img src={imgUrl} alt={imgTitle} className="carousel-card-image" />
      </div>
      <div className="carousel-card-details">
        <h3 className="carousel-card-title">{imgTitle}</h3>
        {artist && <p className="carousel-card-artist">{artist}</p>}
        {date && <p className="carousel-card-date">{date}</p>}
        {price && <p className="carousel-card-price">{price}</p>}
      </div>
    </div>
  );
};

export default CarouselItem;
