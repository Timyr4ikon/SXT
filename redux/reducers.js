import { combineReducers } from "redux";
import * as types from "./types";
import choicesListInitialState from "../data/choicesList";

const choicesList = (state = choicesListInitialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const userChoice = (state = {}, action) => {
  switch (action.type) {
    case types.SET_USER_CHOICE:
      return action.payload;

    default:
      return state;
  }
};

const userCoins = (state = 1290, action) => {
  switch (action.type) {
    case types.SET_USER_COINS:
      return action.payload;

    default:
      return state;
  }
};

let currentBetIdx = 0;
let betsArr = [20, 40, 80, 100, 250, 500, 1000];
const currentBet = (state = 20, action) => {
  switch (action.type) {
    case types.INCREMENT_CURRENT_BET:
      if (currentBetIdx !== betsArr.length - 1) {
        currentBetIdx += 1;
      }
      return betsArr[currentBetIdx];

    case types.DECREMENT_CURRENT_BET:
      if (currentBetIdx !== 0) {
        currentBetIdx -= 1;
      }
      return betsArr[currentBetIdx];

    default:
      return state;
  }
};

const randomAnswers = (state = [], action) => {
  switch (action.type) {
    case types.SET_RANDOM_ANSWERS:
      return action.payload;

    default:
      return state;
  }
};


export default combineReducers({
  choicesList,
  userChoice,
  userCoins,
  currentBet,
  randomAnswers,
});
