import { animals } from './assets/animals'
import { useState } from 'react'

export default function App() {

const title = "";
const showBackground = true;
const background = <img className="background" alt="ocean" src="/images/ocean.jpg"/>;
const images = [];
const [fact, setFact] = useState("");
const animalFacts = (
  <h1 className="title-n-fact">
    {title || "Click an animal for a fun fact!"}
    <p className="fact">{fact}</p>
  </h1>
);

function displayFact(e) {
  const animalName = e.target.alt;
  const randomIndex = Math.floor(
    Math.random() * animals[animalName].facts.length
  );
  const randomFact = animals[animalName].facts[randomIndex];
  setFact(randomFact);
}

for(const seaCreature in animals){
  images.push(<img 
    onClick={displayFact}
    key={seaCreature}
    className={`sea-creature ${animals[seaCreature].className}`}
    alt={seaCreature}
    src={animals[seaCreature].image}
    aria-label={seaCreature}
    role="button"
  />)
}

  return (
    <div className="parentContainer">
      {showBackground && background}
      {animalFacts}
      <div className="animals">
          {images}
      </div>
    </div>
  )
}
