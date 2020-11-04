import * as types from "./types";

export const setUserChoice = (obj) => ({
  type: types.SET_USER_CHOICE,
  payload: obj,
});

export const setUserCoins = (number) => ({
  type: types.SET_USER_COINS,
  payload: number,
});

export const decrementCurrentBet = () => ({
  type: types.DECREMENT_CURRENT_BET,
});

export const incrementCurrentBet = () => ({
  type: types.INCREMENT_CURRENT_BET,
});

export const setRandomAnswers = (arr) => ({
  type: types.SET_RANDOM_ANSWERS,
  payload: arr,
});
