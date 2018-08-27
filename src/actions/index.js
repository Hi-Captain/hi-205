import * as types from "./ActionTypes";

export const shuffle = (comPick) => ({
  type: types.SHUFFLE,
  comPick
})

export const vs = (result, mine, com) => ({
  type: types.VS,
  result,
  mine,
  com
})

export const clearRec = () => ({
  type: types.CLEARREC
})