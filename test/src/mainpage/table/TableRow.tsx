import React from 'react';
import { Dessert } from '../../types';

export interface Props {
  selected: boolean;
  handleCheckbox: (dessert: Dessert, selected: boolean) => void;
  dessert: Dessert;
}

const TableRow = ({ selected, handleCheckbox, dessert } : Props) => (
  <div className="flex bg-light-gray bb b--light-silver" style={{ minWidth: '650px' }}>
    <div className="w-10 pa2 tc">
      <input checked={selected} type="checkbox" onChange={() => handleCheckbox(dessert, selected)} name={dessert.Dessert} />
    </div>
    <div className="w-25 pa2 b tc">{dessert.Dessert}</div>
    <div className="w-20 pa2 b tc">{dessert.nutritionInfo.calories}</div>
    <div className="w-10 pa2 b tc">{dessert.nutritionInfo.fat}</div>
    <div className="w-10 pa2 b tc">{dessert.nutritionInfo.carb}</div>
    <div className="w-25 pa2 b tc">{dessert.nutritionInfo.protein}</div>
  </div>
);

export default TableRow;
