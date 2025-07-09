import React from "react";
import "./StepCard.css";

const StepCard = ({ text, imageSrc }) => (
  <div className="step-card">
    <img src={imageSrc} alt="Step illustration" />
    <p>{text}</p>
  </div>
);

export default StepCard;
