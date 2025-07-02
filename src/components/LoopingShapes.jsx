import React, { useEffect, useRef } from "react";
import anime from "animejs/lib/anime.es.js";
import "./LoopingShapes.css";

const LoopingShapes = () => {
  const loopsRef = useRef(null);
  const loopCount = useRef(0);

  useEffect(() => {
    const timeline = anime.timeline({
      loop: true,
      easing: "easeInOutSine",
      duration: 700,
    });

    // Move out
    timeline
      .add({
        targets: ".word1",
        translateX: "2rem",
        easing: "easeOutSine",
      })
      .add({
        targets: ".word2",
        translateX: "2rem",
        easing: "easeOutSine",
      })
      .add({
        targets: ".word3",
        translateX: "2rem",
        easing: "easeOutSine",
      })
      // Move back
      .add({
        targets: ".word1",
        translateX: "0rem",
        easing: "easeInSine",
      })
      .add({
        targets: ".word2",
        translateX: "0rem",
        easing: "easeInSine",
      })
      .add({
        targets: ".word3",
        translateX: "0rem",
        easing: "easeInSine",
      });
  }, []);

  return (
    <div>
      <div className="words-container">
        <span className="word word1">BOOK</span>
        <span className="word word2">YOUR</span>
        <span className="word word3">SHOW</span>
      </div>
    </div>
  );
};

export default LoopingShapes;
