import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import "./CarouselItem.css";

const springConfig = {
  damping: 30,
  stiffness: 100,
  mass: 2,
};

const CarouselItem = ({ imgUrl, imgTitle, artist, date, price }) => {
  const ref = useRef(null);
  const x = useMotionValue();
  const y = useMotionValue();
  const rotateX = useSpring(0, springConfig);
  const rotateY = useSpring(0, springConfig);
  const scale = useSpring(1, springConfig);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;
    const rotateAmt = 10;

    rotateX.set((-offsetY / (rect.height / 2)) * rotateAmt);
    rotateY.set((offsetX / (rect.width / 2)) * rotateAmt);
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  };

  const handleMouseEnter = () => {
    scale.set(1.05);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    scale.set(1);
  };

  return (
    <motion.div
      ref={ref}
      className="carousel-card"
      style={{
        rotateX,
        rotateY,
        scale,
        transformStyle: "preserve-3d",
      }}
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="carousel-card-image-wrapper">
        <img src={imgUrl} alt={imgTitle} className="carousel-card-image" />
      </div>
      <div className="carousel-card-details">
        <h3 className="carousel-card-title">{imgTitle}</h3>
        {artist && <p className="carousel-card-artist">{artist}</p>}
        {date && <p className="carousel-card-date">{date}</p>}
        {price && <p className="carousel-card-price">{price}</p>}
      </div>
    </motion.div>
  );
};

export default CarouselItem;
