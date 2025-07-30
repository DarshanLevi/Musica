import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import TrendingAndStepsSection from "./components/TrendingAndStepsSection";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <>
      <div className="img-wrapper">
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
