import React from 'react';
import './Display.scss';
import scissors from '../img/가위.svg';
import rock from '../img/바위.svg';
import paper from '../img/보.svg';

const comPick = (txt) => {
  switch(txt){
    case '가위': return scissors
    case '바위': return rock
    case '보': return paper
    default: break;
  }
}

const Display = ({ com, result }) => {
  return (
    <div className="dpWrap">
    <div className="dpWrap__comPick">{com ? <img className={result ? "" : "speed"} alt={com} src={comPick(com)}/> : <img className="speed" alt='img' src={paper} />}</div>
    {result ? <div className="dpWrap__result"><div>{result}</div></div> : null}
    </div>
  );
}

export default Display;
