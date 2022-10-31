import React, {useState} from 'react';
import './App.css';
import Square from "./Square/Square";
import {SquareType} from './types';
import BtnRestart from "./BtnRestart/BtnRestart";
import Attempts from "./Atempts/Attempts";

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

  const openSquare = (id:number) => {
    const itemsCopy = [...items];
    itemsCopy[id].clicked = true;
    setItems(itemsCopy);

    let attemptsCopy = attempts;
    attemptsCopy++;
    setAttempts(attemptsCopy);
  }

  const printSquare = items.map((item) => {
    return (
      <Square key={item.id} square={item} onClicked={openSquare}/>
    )
  })

  const btnRestart = ()=> {
    setItems(createItems);
    const attemptsCopy = 0;
    setAttempts(attemptsCopy);
  }

  return (
    <div className="App">
      <div className='square-deck'>
        {printSquare}
      </div>
      <Attempts attempts={attempts}/>
      <BtnRestart onClickBtn={btnRestart}/>
    </div>
  );
}

export default App;
