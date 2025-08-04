import "./TrendingAndStepsSection.css";
import { items } from "./carousel-data";
import AutoplayCarousel from "./AutoplayCarousel";
import ClickSpark from "./ClickSpark";
import RotatingText from "./RotatingText";
import LoopingShapes from "./LoopingShapes";
import FadeContent from "./FadeContent";
import CountUp from "./CountUp";
import ScrambledText from "./ScrambledText";
import Magnet from "./Magnet";

import SpotlightCard from "./SpotlightCard";
import DetailCard1 from "../assets/chrisna.jpg";
import DetailCard2 from "../assets/venue-music.png";
import DetailCard3 from "../assets/zisha.jpg";
import DetailCard4 from "../assets/live-music.png";

const TrendingAndStepsSection = () => {
  return (
    <ClickSpark
      sparkColor="rgba(229, 150, 40, 0.45)"
      sparkSize={5}
      sparkRadius={15}
      sparkCount={40}
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
                rotationInterval={1500}
              />
            </div>
          </div>

          <p>
            Check out some of the most popular events coming up in your city,
            from club nights, gigs to artist signings.
          </p>

          <Magnet padding={80} disabled={false} magnetStrength={3}>
            <button className="browse-button">Browse Events</button>
          </Magnet>
        </div>

        <AutoplayCarousel items={items} />

        <div className="page-colour">
          <LoopingShapes />

          <div className="fadeItem-wrap">
            <FadeContent
              blur={true}
              duration={1000}
              easing="ease-out"
              initialOpacity={0}
            >
              <div className="fade-item">
                Successfully booked shows through Musica{" "}
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
        </div>

        <div className="alternating-sections">
          <div className="alt-section">
            <SpotlightCard
              className="custom-spotlight-card"
              spotlightColor="rgba(255, 255, 255, 0.59)"
            >
              <img src={DetailCard1} alt="Concert Crowd" className="alt-img" />
            </SpotlightCard>
            <div className="alt-text">
              <ScrambledText
                className="scrambled-text-demo"
                radius={100}
                duration={1.2}
                speed={0.5}
              >
                <h3>Feel the Crowd</h3>
                <p>
                  Experience electrifying concerts with thousands singing in
                  unison under one sky Feel the bass in your chest, the lights
                  in your eyes, and the crowd moving as one - it's more than a
                  concert, it's a moment you'll never forget. <br />
                  <br />
                  From stadium anthems to intimate acoustic sets, find your next
                  unforgettable night.
                </p>
              </ScrambledText>
            </div>
          </div>

          <div className="alt-section reverse">
            <div className="alt-text">
              <ScrambledText
                className="scrambled-text-demo"
                radius={100}
                duration={1.2}
                speed={0.5}
              >
                <h3>Book Effortlessly</h3>
                <p>
                  Get tickets in seconds with our streamlined, mobile-first
                  booking system. No lag, no loading screens - just a few taps
                  and you're in. Optimized for on-the-go fans who live for live
                  music. <br />
                  <br /> Skip the lines and last-minute stress - we make booking
                  as fast as the beat drops.
                </p>
              </ScrambledText>
            </div>
            <SpotlightCard
              className="custom-spotlight-card"
              spotlightColor="rgba(255, 255, 255, 0.59)"
            >
              <img src={DetailCard2} alt="Booking App" className="alt-img" />
            </SpotlightCard>
          </div>

          <div className="alt-section">
            <SpotlightCard
              className="custom-spotlight-card"
              spotlightColor="rgba(255, 255, 255, 0.59)"
            >
              <img src={DetailCard3} alt="Music Artists" className="alt-img" />
            </SpotlightCard>
            <div className="alt-text">
              <ScrambledText
                className="scrambled-text-demo"
                radius={100}
                duration={1.2}
                speed={0.5}
              >
                <h3>Artists You Love</h3>
                <p>
                  From indie vibes to chart-toppers, find events that match your
                  music taste. Browse by mood, genre, or location - we've got
                  everything from underground gigs to sold-out arenas. <br />
                  <br /> Discover rising stars before they blow up - or grab
                  front-row seats to your favorite headliner.
                </p>
              </ScrambledText>
            </div>
          </div>

          <div className="alt-section reverse">
            <div className="alt-text">
              <ScrambledText
                className="scrambled-text-demo"
                radius={100}
                duration={1.2}
                speed={0.5}
              >
                <h3>Transparent Pricing</h3>
                <p>
                  See the final price upfront - no surprise fees at checkout.
                  What you see is what you pay - no shady service charges or
                  hidden extras. <br />
                  <br /> Budget better, book smarter - because the only shock
                  you should get is from the encore.
                </p>
              </ScrambledText>
            </div>
            <SpotlightCard
              className="custom-spotlight-card"
              spotlightColor="rgba(255, 255, 255, 0.59)"
            >
              <img src={DetailCard4} alt="Pricing" className="alt-img" />
            </SpotlightCard>
          </div>
        </div>
      </section>
    </ClickSpark>
  );
};

export default TrendingAndStepsSection;
