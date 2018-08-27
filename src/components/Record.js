import React from 'react';
import './Record.scss';

const Record = ({record, goClearRec}) => {
  const list = record.map((value, i) => {
    return (
      <div className="recList__record" key={i}>
        <div>{++i}</div>
        <div>{value.mine}</div>
        <div>{value.com}</div>
        <div>{value.result}</div>
      </div>
    )
  })

  const count = (value) => {
    const gameC = value.length
    let winC = 0,
        loseC = 0,
        drawC = 0,
        rate = 0,
        streak = 1,
        max = 0,
        temp =''
    for(var i in value){
      switch(value[i].result){
        case "Win":
          winC++;
          // console.log((parseInt(i, 10) + 1) + '번째 에서 ' + streak + '승!')
          if(temp === "Win"){
            streak++;
            // console.log((parseInt(i, 10) + 1) + '번째 에서 ' + streak + '연승')
            if(streak > max){
              max = streak;
              // console.log((parseInt(i, 10) + 1) + '번째 에서 연승갱신! ' + streak + '연승')
            }
          }
          
          break;
        case "Lose":
          if(temp === "Win"){
            streak = 1;
            // console.log((parseInt(i, 10) + 1) + '번째 에서 연승깨기 ! ' + streak)
          }
          loseC++; 
          break;
        default :
          if(temp === "Win"){
            streak = 1;
            // console.log((parseInt(i, 10) + 1) + '번째 에서 연승깨기 ! ' + streak)
          }
          drawC++; break;
      }
      temp = value[i].result
      rate = parseInt((winC / gameC) * 100, 10)
    }
    return(
      <div className="flex-row">
        <div>{gameC}전 {winC}승 {drawC}무 {loseC}패</div>
        <div>승률 {rate}%</div>
        <div>최대 {winC > 0 && max === 0 ? 1 : max}연승</div>
      </div>
    )
  }

  return (
    <div className="recordWrap">
      <div className="recList">
        <div className="recList__meta">
          <div>No.</div><div>Player</div><div>Computer</div><div>Result</div>
        </div>
        {record.length ? list : <div className="empty-txt">기록이 없습니다.</div>}
      </div>
      <div className="recRate">
        {count(record)}
      </div>
      <button onClick={goClearRec}>CLEAR</button>
    </div>
  );
}

export default Record;
