import React from 'react';
import './Display.scss';

const Display = ({ com, result }) => {
  return (
    <div className="dpWrap">
    <div className="dpWrap__comPick">{com}</div>
    {result === '' ? null : <div className="dpWrap__result">{result}</div>}
    </div>
  );
}

export default Display;
