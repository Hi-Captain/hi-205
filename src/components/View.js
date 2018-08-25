import React from 'react';
import Buttons from './Buttons';
import Display from './Display';
import './View.scss';

const View = ({com, mine, result, isShuffle, goShuffle, goVS}) => {
  return (
    <div className="viewWrap">
      <Display result={result} com={com}/>
      <Buttons isShuffle={isShuffle} com={com} goShuffle={goShuffle} goVS={goVS}/>
    </div>
  );
}

export default View;
