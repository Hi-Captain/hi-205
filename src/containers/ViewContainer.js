import View from '../components/View';
import * as actions from '../actions';
import { connect } from 'react-redux';

export function getComPick(){
  const pickCase = [2, 0, 5]
  const random = Math.floor(Math.random() * pickCase.length);
  return pickCase[random]
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
    }, 50)
  },
  goVS: () => {
    clearInterval(this.Interval)
    dispatch(actions.vs());
  }
})

const ViewContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(View)

export default ViewContainer;
