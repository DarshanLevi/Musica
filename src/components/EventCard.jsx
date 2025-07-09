import React from "react";
import "./EventCard.css";

const EventCard = ({ title, date, artist, price }) => (
  <div className="event-card">
    <div className="event-card-content">
      <h3>{title}</h3>
      <p>{date}</p>
      <p>{artist}</p>
      <p>{price}</p>
    </div>
  </div>
);

export default EventCard;
