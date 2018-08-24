import React, { Fragment } from 'react';
import './Buttons.scss';

const Buttons = ({isShuffle, goShuffle, goVS}) => {
  return (
    <div className="btnWrap">
    {isShuffle ?
      <Fragment>
          <button className="btnWrap__btn" onClick={goVS}>2</button>
          <button className="btnWrap__btn" onClick={goVS}>0</button>
          <button className="btnWrap__btn" onClick={goVS}>5</button>
      </Fragment>
          : <button className="btnWrap__btn btnWrap__start" onClick={goShuffle}>Start</button>
     }
    </div>
  );
}

export default Buttons;
