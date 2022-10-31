import React, {useState} from 'react';
import './App.css';
import Square from "./Square/Square";
import {SquareType} from './types';

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

  const openSquare = (id:number) => {
    const itemsCopy = [...items];
    itemsCopy[id].clicked = true;
    setItems(itemsCopy);
  }

  const printSquare = items.map((item) => {
    return (
      <Square key={item.id} square={item} onClicked={openSquare}/>
    )
  })

  return (
    <div className="App">
      <div className='square-deck'>
        {printSquare}
      </div>
    </div>
  );
}

export default App;
