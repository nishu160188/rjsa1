import React, { useState } from 'react';
import AnimalCard from './AnimalCard';
import './App.css';

const animals = [
  { name: 'Tiger', image: 'image/tiger.webp' },
  { name: 'Monkey', image: 'image/monkey.jpeg' },
  { name: 'Butterfly', image: 'image/butterfly.jpeg' },
  { name: 'Snake', image: 'image/snake.jpeg' },
  { name: 'Elephant', image: 'image/elephant.jpeg' }
];

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredAnimals = animals.filter((animal) =>
    animal.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <input
        type="text"
        placeholder="Search animals..."
        value={searchTerm}
        onChange={handleChange}
      />
      <div className="animal-list">
        {filteredAnimals.map((animal, index) => (
          <AnimalCard key={index} animal={animal} />
        ))}
      </div>
    </div>
  );
};

export default App;
