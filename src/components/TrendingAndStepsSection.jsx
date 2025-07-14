import "./TrendingAndStepsSection.css";
import { items } from "./carousel-data";
import AutoplayCarousel from "./AutoplayCarousel";
import ClickSpark from "./ClickSpark";
import RotatingText from "./RotatingText";
import LoopingShapes from "./LoopingShapes";
import FadeContent from "./FadeContent";
import CountUp from "./CountUp";

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
                texts={[
                  "Chennai!",
                  "Kolkata!",
                  "Bengaluru!",
                  "Delhi!",
                  "Mumbai!",
                ]}
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
        <LoopingShapes />

        <div className="steps-section">
          <h2>EASY WAY TO BOOK A VIBE</h2>
        </div>

        <div className="fadeItem-wrap">
          <FadeContent
            blur={true}
            duration={1000}
            easing="ease-out"
            initialOpacity={0}
          >
            <div className="fade-item">
             Shows booked through Musica{" "}
              <div className="plus-wrap">
              <CountUp
                from={0}
                to={100}
                separator=","
                direction="up"
                duration={2}
                className="count-up-text"
              />
              <p className="plus">+</p>
              </div>
            </div>
          </FadeContent>

          <FadeContent
            blur={true}
            duration={1000}
            easing="ease-out"
            initialOpacity={0}
          >
            <div className="fade-item">
              Users enjoying upfront, no-surprise pricing{" "}
              <div className="plus-wrap">
              <CountUp
                from={1000}
                to={5000}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text"
              />
              <p className="plus">+</p>
              </div>
            </div>
          </FadeContent>

          <FadeContent
            blur={true}
            duration={1000}
            easing="ease-out"
            initialOpacity={0}
          >
            <div className="fade-item">
              Personalized concerts recommended daily{" "}
            <div className="plus-wrap">
              <CountUp
                from={120}
                to={1200}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text"
              />
              <p className="plus">+</p>
              </div>
            </div>
          </FadeContent>
        </div>
        
      </section>
    </ClickSpark>
  );
};

export default TrendingAndStepsSection;
