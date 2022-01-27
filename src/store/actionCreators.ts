import * as actionTypes from "./actionTypes";

export function addCard(payload: Card) {
  const action: CardAction = {
    type: actionTypes.ADD_CARD,
    payload
  };
  return action;
}

export function removeCard(payload: Card) {
  const action: CardAction = {
    type: actionTypes.REMOVE_CARD,
    payload
  };
  return action;
}
