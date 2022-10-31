import React, {useState} from 'react';
import {SquareType} from '../../types';
import Attempts from "../../components/Atempts/Attempts";
import Deck from "../../components/Deck/Deck";
import Victory from "../../components/Victory/Victory";
import './App.css';

const createItems = () => {
  const random = Math.floor(Math.random() * (36 + 1))
  const itemsDeck: SquareType[] = [];
  for (let i = 0; i < 36; i++) {
    const newItem: SquareType = {hasItem: false, clicked: false, id: i};
    if (i === random) {
      newItem.hasItem = true;
    }
    itemsDeck.push(newItem);
  }
  return itemsDeck
}

function App() {
  const [items, setItems] = useState(createItems());
  const [attempts, setAttempts] = useState(0);

  const openSquare = (id: number) => {
    let attemptsCopy = attempts;
    if (!items[id].clicked) {
      attemptsCopy++;
    }
    setAttempts(attemptsCopy);

    const itemsCopy = [...items];
    itemsCopy[id].clicked = true;
    setItems(itemsCopy);
  }

  const btnRestart = () => {
    setItems(createItems);
    const attemptsCopy = 0;
    setAttempts(attemptsCopy);
  }

  return (
    <div className="App">
      <Deck squares={items} onClicked={openSquare}/>
      <Attempts attempts={attempts} onClickBtn={btnRestart}/>
      <Victory square={items} onClickBtn={btnRestart}/>
    </div>
  );
}

export default App;
