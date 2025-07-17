import "./HeroSection.css"; // optional, see styles below
import BlurText from "./BlurText";
import concertImage from "../assets/cugai.jpg";
import concertImage2 from "../assets/musico.png";
import ClickSpark from "./ClickSpark";
import TiltedCard from "./TiltedCard";


const handleAnimationComplete = () => {
  console.log("Animation completed!");
};

const HeroSection = () => {
  return (
    <>
        <ClickSpark
      sparkColor="rgb(229, 151, 40)"
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={300}
    >
      <section className="hero">
        <div className="hero-content">
   
          <div className="app-wrapper">
            <div className="wrap-1">
              <div className="blur-wrapper">
                <BlurText
                  text="SEARCH"
                  delay={100}
                  animateBy="words"
                  direction="top"
                  onAnimationComplete={handleAnimationComplete}
                  className="blur-text"
                />
              </div>
              <div className="blur-wrapper">
                <BlurText
                  text="THE"
                  delay={100}
                  animateBy="words"
                  direction="top"
                  onAnimationComplete={handleAnimationComplete}
                  className="blur-text"
                />
              </div>
            </div>
            <div className="wrap-2">
              <div className="blur-wrapper">
                <BlurText
                  text="WORLD"
                  delay={100}
                  animateBy="words"
                  direction="top"
                  onAnimationComplete={handleAnimationComplete}
                  className="blur-text"
                />
              </div>
              <div className="blur-wrapper">
                <BlurText
                  text="OF"
                  delay={100}
                  animateBy="words"
                  direction="top"
                  onAnimationComplete={handleAnimationComplete}
                  className="blur-text"
                />
              </div>
            </div>
            <div className="blur-wrapper">
              <BlurText
                text="MUSICA"
                delay={100}
                animateBy="words"
                direction="top"
                onAnimationComplete={handleAnimationComplete}
                className="blur-text-color"
              />
            </div>
          </div>

          <p className="hero-subtitle">
            Live moments. Fair prices. Tailored for your taste. MUSICA is your
            ticket to the sound.
          </p>
          <button className="hero-button">Get App</button>
        </div>

        <TiltedCard
          imageSrc={concertImage}
          altText="CUGAI - GNX Album Cover"
          captionText="OSAI - Cugai"
          containerHeight="300px"
          containerWidth="300px"
          imageHeight="320px"
          imageWidth="285px"
          rotateAmplitude={22}
          scaleOnHover={1.2}
          showMobileWarning={false}
          showTooltip={false}
          displayOverlayContent={true}
          overlayContent={<p className="tilted-card-demo-text"></p>}
        />

        <TiltedCard
          imageSrc={concertImage2}
          altText="Musico - ORG Album Cover"
          captionText="MUSICO - NRG"
          containerHeight="300px"
          containerWidth="300px"
          imageHeight="380px"
          imageWidth="285px"
          rotateAmplitude={22}
          scaleOnHover={1.2}
          showMobileWarning={false}
          showTooltip={false}
          displayOverlayContent={true}
          overlayContent={<p className="tilted-card-demo-text"></p>}
        />
      </section>
      </ClickSpark>
    </>
  );
};

export default HeroSection;