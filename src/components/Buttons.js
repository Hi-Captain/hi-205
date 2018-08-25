import React, { Fragment } from 'react';
import './Buttons.scss';

const Buttons = ({isShuffle, com, goShuffle, goVS}) => {
  return (
    <div className="btnWrap">
    {isShuffle ?
      <Fragment>
          <button className="btnWrap__btn" onClick={() => goVS('가위', com)}>가위</button>
          <button className="btnWrap__btn" onClick={() => goVS('바위', com)}>바위</button>
          <button className="btnWrap__btn" onClick={() => goVS('보', com)}>보</button>
      </Fragment>
          : <button className="btnWrap__btn btnWrap__start" onClick={goShuffle}>Start</button>
     }
    </div>
  );
}

export default Buttons;
