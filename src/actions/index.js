import * as types from "./ActionTypes";

export const shuffle = (comPick) => ({
  type: types.SHUFFLE,
  comPick
})

export const vs = (result) => ({
  type: types.VS,
  result
})