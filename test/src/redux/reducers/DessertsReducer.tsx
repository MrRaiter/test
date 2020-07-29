/* eslint-disable no-param-reassign */
import produce from 'immer';
import { StoreState } from '../../types/index';
import * as constants from '../actionTypes/dessertTypes';

const intitialState: StoreState = {
  desserts: [],
};

const dessertsReducer = produce((draft, action) => {
  switch (action.type) {
    case constants.GET_DESSERTS:
      draft.desserts = action.payload;
      return draft;
    default:
      return draft;
  }
}, intitialState);

export default dessertsReducer;
