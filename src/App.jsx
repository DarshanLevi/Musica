// import Navbar from "./components/Navbar";
// import HeroSection from "./components/HeroSection";
// import TrendingAndStepsSection from "./components/TrendingAndStepsSection";
// import Footer from "./components/Footer";
// import backgroundVideo from "./assets/background/cyberbox_30fps.mp4";

// import "./App.css";

// function App() {
//   return (
//     <>
//       <div className="video-wrapper">
//         <video autoPlay muted loop playsInline className="bg-video">
//           <source src={backgroundVideo} type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>

//         <div className="video-overlay">
//           <Navbar />
//           <HeroSection />
//         </div>
//       </div>

//       <div className="other-wrap">
//         <TrendingAndStepsSection />
//         <Footer />
//       </div>
//     </>
//   );
// }

// export default App;

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import TrendingAndStepsSection from "./components/TrendingAndStepsSection";
import Footer from "./components/Footer";
import backgroundImg from "./assets/background/vinyl.jpg";

import "./App.css";

function App() {
  return (
    <>
      <div
        className="img-wrapper"
        style={{
          backgroundImage: `url(${backgroundImg})`,
        }}
      >
        <Navbar />
        <HeroSection />
      </div>

      <div>
        <TrendingAndStepsSection />
        <Footer />
      </div>
    </>
  );
}

export default App;