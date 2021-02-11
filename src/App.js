import React, { useState, useEffect } from 'react';
import Background from './components/Background/Background';
import Butterfly from './components/Butterfly/Butterfly';
import Menu from './components/Menu/Menu';
import nextId from 'react-id-generator';
import useKeyPress from './hooks/useKeyPress';
import _, { matchesProperty } from 'lodash';

const map = {
  width: window.innerWidth,
  height: window.innerHeight,
  border: 20,
};

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
        randomInt(map.width - 2 * map.border) + map.border,
        randomInt(map.height -2 * map.border) + map.border,
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
      ((randomFromInt(125, fly.position[0]) + map.width) % (map.width - 2 * map.border)) + map.border,
      ((randomFromInt(125, fly.position[1]) + map.height) % (map.height - 2 * map.border)) + map.border,
    ]
  }
}

function App() {
  const [flies, setFlies] = useState(generateFlies(30));
  const [menuState, setMenuState] = useState(false);
  const [options, setOptions] = useState({});
  const keyPressed = useKeyPress('Escape');
  useEffect(() => {
    if(keyPressed) setMenuState(!menuState);
  }, [keyPressed]);

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
        <Butterfly
          {...fly}
          highContrast={options.highContrast}
          onClick={() => removeFly(fly.id)}
        />
      ))}
      {menuState &&
        <Menu
          menuState={menuState}
          setMenuState={setMenuState}
          options={options}
          setOptions={setOptions}
        />
      }
    </Background>
  );
}

export default App;
