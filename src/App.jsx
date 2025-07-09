import Navbar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import TrendingAndStepsSection from "./components/TrendingAndStepsSection";

import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <TrendingAndStepsSection />
      {/* You can add more sections here */}
    </div>
  );
}

export default App;
