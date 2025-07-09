import CarouselItem from "./CarouselItem";
import "./AutoplayCarousel.css";


const AutoplayCarousel = ({ items }) => {
  return (
    <div className="carousel-container">
      <div className="carousel-track">
        {items.map((item, index) => (
          <CarouselItem
            key={index}
            imgUrl={item.imgUrl}
            imgTitle={item.title}
            artist={item.artist}
            date={item.date}
            price={item.price}
          />
        ))}
        {/* Duplicate for seamless loop */}
        {items.map((item, index) => (
          <CarouselItem
            key={`dup-${index}`}
            imgUrl={item.imgUrl}
            imgTitle={item.title}
            artist={item.artist}
            date={item.date}
            price={item.price}
          />
        ))}
      </div>
    </div>  
  );
};

export default AutoplayCarousel;
