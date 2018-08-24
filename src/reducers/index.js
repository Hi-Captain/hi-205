import * as types from '../actions/ActionTypes';

const initialState = {
  mine: '',
  com: '',
  result: '',
  isShuffle: false
}

function startGame(state = initialState, action) {
  switch (action.type){
    case types.SHUFFLE:
      return {
        ...state,
        isShuffle: true,
        com: action.comPick,
      };
    case types.VS:
      return {
        ...state,
        isShuffle: false
      }
    default :
      return state;
  }
}

export default startGame;