import React, { Fragment } from 'react';
import './Buttons.scss';

const Buttons = ({isShuffle, com, goShuffle, goVS}) => {
  return (
    <div className="btnWrap">
    {isShuffle ?
      <Fragment>
          <button className="btnWrap__btn scissors" onClick={(e) => {e.stopPropagation(); goVS('가위', com)}}><div className="scissors">가위</div></button>
          <button className="btnWrap__btn rock" onClick={(e) => {e.stopPropagation(); goVS('바위', com)}}><div className="rock">바위</div></button>
          <button className="btnWrap__btn paper" onClick={(e) => {e.stopPropagation(); goVS('보', com)}}><div className="paper">보</div></button>
      </Fragment>
          : <button className="btnWrap__btn btnWrap__start" onClick={goShuffle}>START</button>
     }
    </div>
  );
}

export default Buttons;
