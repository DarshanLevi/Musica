import CarouselItem from "./CarouselItem";
import "./AutoplayCarousel.css";

const AutoplayCarousel = ({ items }) => {
  // Duplicate items for seamless scroll loop
  const allItems = [...items, ...items];

  return (
    <div className="carousel-container">
      <div className="carousel-track">
        {allItems.map((item, index) => (
          <div className="carousel-card-wrapper" key={index}>
            <CarouselItem
              imgUrl={item.imgUrl}
              imgTitle={item.title}
              artist={item.artist}
              date={item.date}
              price={item.price}
            />
          </div>
        ))}
          {allItems.map((item, index) => (
          <div className="carousel-card-wrapper" key={index}>
            <CarouselItem
              imgUrl={item.imgUrl}
              imgTitle={item.title}
              artist={item.artist}
              date={item.date}
              price={item.price}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AutoplayCarousel;
