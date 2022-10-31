import './Square.css';
import {SquareType} from "../types";
import React from "react";

interface Props {
  square: SquareType;
  onClicked: (id: number) => void;
}

const Square: React.FC<Props> =(props)=> {
  let className = 'square';
  if (props.square.clicked){
    className = 'square-black';
  }
  return (
    <div className={className} onClick={() => props.onClicked(props.square.id)}></div>
  );
};

export default Square;