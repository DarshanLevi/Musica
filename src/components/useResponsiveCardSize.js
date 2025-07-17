// hooks/useResponsiveCardSize.js
import { useEffect, useState } from "react";

export default function useResponsiveCardSize() {
  const [cardSize, setCardSize] = useState({
    containerHeight: "300px",
    containerWidth: "300px",
    imageHeight: "330px",
    imageWidth: "300px",
  });

  useEffect(() => {
    const updateSize = () => {
      const width = window.innerWidth;

      if (width <= 400) {
        setCardSize({
          containerHeight: "200px",
          containerWidth: "200px",
          imageHeight: "240px",
          imageWidth: "200px",
        });
      } else if (width <= 600) {
        setCardSize({
          containerHeight: "240px",
          containerWidth: "240px",
          imageHeight: "280px",
          imageWidth: "240px",
        });
      } else {
        setCardSize({
          containerHeight: "300px",
          containerWidth: "300px",
          imageHeight: "330px",
          imageWidth: "300px",
        });
      }
    };

    updateSize(); // initial check
    window.addEventListener("resize", updateSize);

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return cardSize;
}
