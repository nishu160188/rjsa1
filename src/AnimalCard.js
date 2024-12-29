import React from 'react';

const AnimalCard = ({ animal }) => {
  return (
    <div className="animal-card">
      <img src={animal.image} alt={animal.name} />
      <h3>{animal.name}</h3>
    </div>
  );
};

export default AnimalCard;
