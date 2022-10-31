import React from 'react';

interface Props {
  onClickBtn: React.MouseEventHandler;
}

const BtnRestart:React.FC<Props> = props => {
  return (
    <div>
      <button onClick={props.onClickBtn}>Restart</button>
    </div>
  );
};

export default BtnRestart;