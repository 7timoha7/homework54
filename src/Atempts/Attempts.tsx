import React from 'react';
interface Props {
  attempts: number;
}

const Attempts:React.FC<Props> = props => {
  return (
    <div>
      <span>{props.attempts}</span>
    </div>
  );
};

export default Attempts;