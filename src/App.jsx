import "./App.css";
import BlurText from "./BlurText";
import SplitText from "./SplitText";
import Aurora from "./Aurora";
import { div } from "framer-motion/client";


function App() {
  const handleBlurComplete = () => {
    console.log("BlurText animation completed!");
  };

  const handleSplitTextComplete = () => {
    console.log("SplitText animation completed!");
  };

  return (
    <div>
      <div className="aurora-wrapper">
        <Aurora
          colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
          blend={0.5}
          amplitude={1.0}
          speed={1.5}
          height={123}
        />
      </div>
      
      <div className="blur-wrapper">
        <BlurText
          text="Isn't this so cool?!"
          delay={150}
          animateBy="words"
          direction="top"
          onAnimationComplete={handleBlurComplete}
          className="blur-text"
        />
      </div>

      <div className="split-wrapper">
        <SplitText
          text="Hello, GSAP!"
          className="split-text"
          delay={40}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
          onLetterAnimationComplete={handleSplitTextComplete}
        />
      </div>
  </div>

  );
}

export default App;
