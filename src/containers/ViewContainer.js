import View from '../components/View';
import * as actions from '../actions';
import { connect } from 'react-redux';

export function getComPick(){
  const pickCase = ['가위', '바위', '보']
  const random = Math.floor(Math.random() * pickCase.length);
  return pickCase[random]
}

export function getResult(mine, com){
  const winTable = {'가위': '보', '바위': '가위', '보': '바위'}
  if(winTable[mine] === com){
    return 'Win'
  } else if (mine === com){
    return 'Draw'
  } else {
    return 'Lose'
  }
}

const mapStateToProps = (state) => ({
  mine: state.mine,
  com: state.com,
  result: state.result,
  isShuffle: state.isShuffle
});

const mapDispatchToProps = (dispatch) => ({
  goShuffle: () => {
    let temp = 0
    this.Interval = setInterval(() => {
      let comPick = getComPick();
      while(comPick === temp){comPick = getComPick()}
      dispatch(actions.shuffle(comPick));
      temp = comPick
    }, 100)
  },
  goVS: (minePick, comPick) => {
    clearInterval(this.Interval)
    const result = getResult(minePick, comPick)
    dispatch(actions.vs(result));
  }
})

const ViewContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(View)

export default ViewContainer;
