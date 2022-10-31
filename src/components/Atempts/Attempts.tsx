import React from 'react';
import BtnRestart from "../BtnRestart/BtnRestart";
import './Attempts.css';

interface Props {
  attempts: number;
  onClickBtn: React.MouseEventHandler;
}

const Attempts: React.FC<Props> = props => {
  return (
    <div className='attempts-btn-box'>
      <span>Number of tries: {props.attempts}</span>
      <BtnRestart onClickBtn={() => props.onClickBtn}/>
    </div>
  );
};

export default Attempts;