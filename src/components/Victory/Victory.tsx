import React from 'react';
import {SquareType} from "../../types";
import BtnRestart from "../BtnRestart/BtnRestart";
import './Victory.css'

interface Props {
  square: SquareType[];
  onClickBtn: React.MouseEventHandler;
}

const Victory: React.FC<Props> = (props) => {
  let className = 'victory-n';

  props.square.map((item) => {
    if (item.hasItem && item.clicked) {
      return className = 'victory-y'
    }
    return props.square;
  })

  return (
    <div className={className}>
      <div className='won-box'>
        <span className='won'>You won</span>
        <BtnRestart onClickBtn={props.onClickBtn}/>
      </div>
    </div>
  );
};

export default Victory;