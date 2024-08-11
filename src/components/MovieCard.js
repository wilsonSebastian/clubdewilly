import React from 'react';

const MovieCard = ({ image, title, year }) => {
  return (
    <div className="movie-card">
      <img src={image} alt={title} />
      <div className="movie-info">
        <h3>{title}</h3>
        <span>{year}</span>
      </div>
    </div>
  );
};

export default MovieCard;