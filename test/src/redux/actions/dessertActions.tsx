import { Dispatch } from 'redux';
import * as constants from '../actionTypes/dessertTypes';
import { Dessert } from '../../types/index';

const getDesserts = (data: Dessert[]) => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: constants.GET_DESSERTS, payload: data });
  } catch (err) {
    console.error(err);
  }
};

export default getDesserts;
