import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import TrendingAndStepsSection from "./components/TrendingAndStepsSection";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";

import "./App.css";

function App() {
  return (
    <>
      <div className="img-wrapper">
        <CustomCursor />
        <Navbar />
        <HeroSection />
      </div>

      <div className="glass-wrap">
        <TrendingAndStepsSection />
        <Footer />
      </div>
    </>
  );
}

export default App;
