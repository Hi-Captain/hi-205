import * as types from "./ActionTypes";

export const shuffle = (comPick) => ({
  type: types.SHUFFLE,
  comPick
})

export const vs = () => ({
  type: types.VS
})