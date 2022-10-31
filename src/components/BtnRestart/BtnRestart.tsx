import React from 'react';
import './BtnRestart.css'

interface Props {
  onClickBtn: React.MouseEventHandler;
}

const BtnRestart: React.FC<Props> = props => {
  return (
    <div>
      <button className='bnt-restart' onClick={props.onClickBtn}>Restart</button>
    </div>
  );
};

export default BtnRestart;