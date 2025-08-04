import "./HeroSection.css"; // optional, see styles below
import BlurText from "./BlurText";
import concertImage from "../assets/cugai.jpg";
import concertImage2 from "../assets/musico.png";
import ClickSpark from "./ClickSpark";
import TiltedCard from "./TiltedCard";
import Magnet from "./Magnet";

const handleAnimationComplete = () => {
  console.log("Animation completed");
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
                  <Magnet padding={70} disabled={false} magnetStrength={25}>
                    <BlurText
                      text="SEARCH"
                      delay={100}
                      animateBy="words"
                      direction="top"
                      onAnimationComplete={handleAnimationComplete}
                      className="blur-text"
                    />
                  </Magnet>
                </div>
                <div className="blur-wrapper">
                  <Magnet padding={70} disabled={false} magnetStrength={25}>
                    <BlurText
                      text="THE"
                      delay={100}
                      animateBy="words"
                      direction="top"
                      onAnimationComplete={handleAnimationComplete}
                      className="blur-text"
                    />
                  </Magnet>
                </div>
              </div>

              <div className="wrap-2">
                <div className="blur-wrapper">
                  <Magnet padding={70} disabled={false} magnetStrength={25}>
                    <BlurText
                      text="WORLD"
                      delay={100}
                      animateBy="words"
                      direction="top"
                      onAnimationComplete={handleAnimationComplete}
                      className="blur-text"
                    />
                  </Magnet>
                </div>

                <div className="blur-wrapper">
                  <Magnet padding={70} disabled={false} magnetStrength={25}>
                    <BlurText
                      text="OF"
                      delay={100}
                      animateBy="words"
                      direction="top"
                      onAnimationComplete={handleAnimationComplete}
                      className="blur-text"
                    />
                  </Magnet>
                </div>
              </div>
              <div className="blur-wrapper">
                <Magnet padding={70} disabled={false} magnetStrength={25}>
                  <BlurText
                    text="MUSICA"
                    delay={100}
                    animateBy="words"
                    direction="top"
                    onAnimationComplete={handleAnimationComplete}
                    className="blur-text-color"
                  />
                </Magnet>
              </div>
            </div>

            <p className="hero-subtitle">
              Live moments. Fair prices. Tailored for your taste. MUSICA is your
              ticket to the sound.
            </p>

            <Magnet padding={180} disabled={false} magnetStrength={40}>
              <button className="hero-button">Get App</button>
            </Magnet>
          </div>
        <div className="anima-card1"> 
        <Magnet padding={70} disabled={false} magnetStrength={25}>
          <TiltedCard
            imageSrc={concertImage}
            altText="CUGAI - GNX Album Cover"
            captionText="OSAI - Cugai"
            containerHeight="300px"
            containerWidth="240px"
            imageHeight="320px"
            // imageWidth="285px"
            rotateAmplitude={15}
            scaleOnHover={1.1}
            showMobileWarning={false}
            showTooltip={false}
            displayOverlayContent={true}
            overlayContent={<p className="tilted-card-demo-text"></p>}
          />
          </Magnet>
          </div>
          
          <Magnet padding={70} disabled={false} magnetStrength={25}>
          <TiltedCard
            imageSrc={concertImage2}
            altText="Musico - ORG Album Cover"
            captionText="MUSICO - NRG"
            containerHeight="300px"
            containerWidth="240px"
            imageHeight="380px"
            // imageWidth="285px"
            rotateAmplitude={15}
            scaleOnHover={1.1}
            showMobileWarning={true}
            showTooltip={false}
            displayOverlayContent={true}
            overlayContent={<p className="tilted-card-demo-text"></p>}
          />
          </Magnet>
          

        </section>
      </ClickSpark>
    </>
  );
};

export default HeroSection;
