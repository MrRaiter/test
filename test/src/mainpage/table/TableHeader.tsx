/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useState, MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StoreReducer, Dessert } from '../../types/index';
import getDesserts from '../../redux/actions/dessertActions';

export interface Props {
  handleGlobalCheckbox: (value: boolean) => void;
  allChecked: boolean;
}

const TableHeader = ({ handleGlobalCheckbox, allChecked }: Props) => {
  const [sort, setSort] = useState<string>('Dessert');
  const sortHandle = (e: MouseEvent<HTMLElement>) => {
    setSort(e.currentTarget.id);
  };

  const dispatch = useDispatch();
  const dessertList: Dessert[] = useSelector((store: StoreReducer) => store.desserts.desserts);

  useEffect(() => {
    let sortedDessertList: Dessert[] = [];
    switch (sort) {
      case 'Dessert':
        sortedDessertList = [...dessertList].sort((des1, des2) => des1.Dessert.localeCompare(des2.Dessert));
        break;
      case 'Calories':
        sortedDessertList = [...dessertList].sort((des1, des2) => (des1.nutritionInfo.calories > des2.nutritionInfo.calories ? 1 : -1));
        break;
      case 'Fat':
        sortedDessertList = [...dessertList].sort((des1, des2) => (des1.nutritionInfo.fat > des2.nutritionInfo.fat ? 1 : -1));
        break;
      case 'Carbs':
        sortedDessertList = [...dessertList].sort((des1, des2) => (des1.nutritionInfo.carb > des2.nutritionInfo.carb ? 1 : -1));
        break;
      case 'Protein':
        sortedDessertList = [...dessertList].sort((des1, des2) => (des1.nutritionInfo.protein > des2.nutritionInfo.protein ? 1 : -1));
        break;
      default:
        sortedDessertList = dessertList;
    }
    dispatch(getDesserts(sortedDessertList));
    // eslint-disable-next-line
  }, [sort]);

  return (
    <div className="bb b--light-silver flex bg-white" style={{ minWidth: '650px' }}>
      <div className="w-10 pa2 tc">
        <input type="checkbox" checked={allChecked} onChange={() => handleGlobalCheckbox(!allChecked)} />
      </div>
      <div onClick={sortHandle} className={`pointer w-25 pa2 b tc ${sort === 'Dessert' && 'blue'}`} id="Dessert">Dessert(100g serving)</div>
      <div onClick={sortHandle} className={`pointer w-20 pa2 b tc ${sort === 'Calories' && 'blue'}`} id="Calories">Calories</div>
      <div onClick={sortHandle} className={`pointer w-10 pa2 b tc ${sort === 'Fat' && 'blue'}`} id="Fat">Fat (g)</div>
      <div onClick={sortHandle} className={`pointer w-10 pa2 b tc ${sort === 'Carbs' && 'blue'}`} id="Carbs">Carbs (g)</div>
      <div onClick={sortHandle} className={`pointer w-25 pa2 b tc ${sort === 'Protein' && 'blue'}`} id="Protein">Protein (g)</div>
    </div>
  );
};

export default TableHeader;
