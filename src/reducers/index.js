import * as types from '../actions/ActionTypes';

const initialState = {
  mine: '',
  com: '',
  result: '',
  isShuffle: false,
  record: []
}

function startGame(state = initialState, action) {
  switch (action.type){
    case types.SHUFFLE:
      return {
        ...state,
        isShuffle: true,
        com: action.comPick,
        result: ''
      };
    case types.VS:
      return {
        ...state,
        isShuffle: false,
        result: action.result,
        record: [...state.record, {mine: action.mine, com: action.com, result: action.result}]
      }
    case types.CLEARREC:
      return {
        ...state,
        record: []
      }
    default :
      return state;
  }
}

export default startGame;