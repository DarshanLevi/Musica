import "./TrendingAndStepsSection.css";
import { items } from "./carousel-data";
import StepCard from "./StepCard";
import AutoplayCarousel from "./AutoplayCarousel";
import ClickSpark from "./ClickSpark";
import RotatingText from "./RotatingText";
import TiltedCard from "./TiltedCard";

const TrendingAndStepsSection = () => {
  return (
    <ClickSpark
      sparkColor="#42c0dd"
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={300}
    >
      <section className="body-section">

        <div className="trending-events">
          <div className="loop-words">
            <h2>Trending in</h2>
            <div className="loop-design">
            <RotatingText
              texts={["Chennai!", "Kolkata!", "Bengaluru!", "Delhi!", "Mumbai!"]}
              mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
              staggerFrom={"last"}
              initial={{ y: "60%" }}
              animate={{ y: 0 }}
              exit={{ y: "0%" }}
              staggerDuration={0.02}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 1000 }}
              rotationInterval={2500}
            />
            </div>
          </div>

          <p>
            Check out some of the most popular events coming up in your city,
            from club nights,gigs to artist signings.
          </p>
          <button className="browse-button">Browse Events</button>
        </div>

        <AutoplayCarousel items={items} />

        <div className="steps-section">
          <h2>EASY WAY TO BOOK A VIBE</h2>
          <div className="steps-container">
            <StepCard
              text="Browse trending concerts near you"
              imageSrc="/assets/step1.png"
            />
            <StepCard
              text="Secure your tickets in seconds"
              imageSrc="/assets/step2.png"
            />
            <StepCard
              text="Show up and enjoy the music"
              imageSrc="/assets/step3.png"
            />
          </div>
        </div>
      </section>
    </ClickSpark>
  );
};

export default TrendingAndStepsSection;
