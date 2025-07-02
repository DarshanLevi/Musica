
import Navbar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import LoopingShapes from "./components/LoopingShapes";
import PixelTrail from './components/PixelTrail';

import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <LoopingShapes />
      <div style={{ height: '500px', position: 'relative', overflow: 'hidden'}}>
  <PixelTrail
    gridSize={100}
    trailSize={0.03}
    maxAge={450}
    interpolate={1.5}
    color="#cfcfcf"
    gooeyFilter={{ id: "custom-goo-filter", strength: 1 }}
  />
</div>
      {/* You can add more sections here */}
    </div>
  );
}

export default App;
