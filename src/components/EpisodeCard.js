// src/components/EpisodeCard.js
import React from 'react';

const EpisodeCard = ({ image, title, episode }) => {
  return (
    <div className="episode-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{episode}</p>
    </div>
  );
};

export default EpisodeCard;
