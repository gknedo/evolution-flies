import React, { useState } from 'react';
import Background from './components/Background/Background';
import Butterfly from './components/Butterfly/Butterfly';
import nextId from 'react-id-generator';
import useKeyPress from './hooks/useKeyPress';
import _ from 'lodash';

function randomInt(max=360, min=0){
  return Math.floor(Math.random() * (max-min)) + min
}

function randomFromInt(variation, base=0){
  return randomInt(base+variation, base-variation);
}

function generateFlies(n){
  const flies = []
  for(let i = 0; i < n; i++){
    flies.push({
      id: nextId(),
      rotate: randomInt(360),
      color: [
        randomInt(256),
        randomInt(256),
        randomInt(256),
      ],
      position: [
        randomInt(window.innerWidth - 40) + 20,
        randomInt(window.innerHeight - 40) + 20,
      ]
    })
  }
  return flies;
}

function mutate(fly){
  return {
    id: nextId(),
    rotate: randomFromInt(10, fly.rotate),
    color: fly.color.map((fcolor) => (
      Math.max(0, Math.min(255, randomFromInt(15, fcolor)))
    )),
    position: [
      Math.max(20, Math.min(window.innerWidth - 20, randomFromInt(125, fly.position[0]))),
      Math.max(20, Math.min(window.innerHeight - 20, randomFromInt(125, fly.position[1]))),
    ]
  }
}

function App() {
  const [flies, setFlies] = useState(generateFlies(30));
  const highContrast = useKeyPress('c');

  const removeFly = (id) => {
    setFlies(_.filter(flies, (fly) => fly.id !== id));
  };

  const addFlies = (n) => {
    const newFlies = [];
    while(newFlies.length < n)
      newFlies.push(mutate(_.sample(flies)));
    setFlies([...flies, ...newFlies]);
  };

  if(flies.length < 30){
    addFlies(1);
  }

  console.log(flies.length);
  return (
    <Background>
      {flies.map((fly) => (
        <Butterfly {...fly} highContrast={highContrast} onClick={() => removeFly(fly.id)}/>
      ))}
    </Background>
  );
}

export default App;
