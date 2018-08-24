import React from 'react';
import Buttons from './Buttons';
import './View.scss';

const View = ({com, mine, result, isShuffle, goShuffle, goVS}) => {
  return (
    <div className="viewWrap">
      <div className="viewWrap__view">
        <div className="viewWrap__view__text">{com}</div>
      </div>
      <Buttons isShuffle={isShuffle} goShuffle={goShuffle} goVS={goVS}/>
    </div>
  );
}

export default View;
