import React, { MouseEvent, FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Dessert } from '../../types';
import { addDessertsApi } from '../../api/index';

export interface Props {
  handleGlobalCheckbox: (value: boolean) => void;
  allChecked: boolean;
}

const AddModal = () => {
  const [dessert, setDessert] = useState<Dessert>({
    Dessert: '',
    nutritionInfo: {
      fat: 0,
      calories: 0,
      protein: 0,
      carb: 0,
    },
  } as Dessert);
  const history = useHistory();

  const handleSumbit = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      await addDessertsApi(dessert!);
    } catch (err) {
      console.error(err);
    }
    history.push('/');
  };

  const handleChangeInfo = ({ currentTarget: { name, value } }: FormEvent<HTMLInputElement>) => {
    const newDessert: any = { ...dessert };
    if (name === 'name') newDessert.Dessert = value;
    else newDessert.nutritionInfo[name] = value;
    setDessert(newDessert);
  };

  return (
    <div className="bg-light-gray center pa3">
      <div className="flex flex-column center bg-white pa3 w-40-l w-90">
        <div className="bg-gold center w-100 h2 tc">
          <p className="b white mt0 mt2">Please fill all details before you submit</p>
        </div>
        <div className="w-100 center b">
          <p>Dessert Name*</p>
          <input
            value={dessert?.Dessert}
            className="w-100"
            type="text"
            name="name"
            onChange={handleChangeInfo}
          />
        </div>
        <div className="w-100 center b">
          <p>Calories*</p>
          <input
            value={dessert?.nutritionInfo?.calories}
            className="w-100"
            type="number"
            name="calories"
            onChange={handleChangeInfo}
          />
        </div>
        <div className="w-100 center b">
          <p>Fat*</p>
          <input
            value={dessert?.nutritionInfo?.fat}
            className="w-100"
            type="number"
            name="fat"
            onChange={handleChangeInfo}
          />
        </div>
        <div className="w-100 center b">
          <p>Carbs*</p>
          <input
            value={dessert?.nutritionInfo?.carb}
            className="w-100"
            type="number"
            name="carb"
            onChange={handleChangeInfo}
          />
        </div>
        <div className="w-100 center pb4 b">
          <p>Protein*</p>
          <input
            value={dessert?.nutritionInfo?.protein}
            className="w-100"
            type="number"
            name="protein"
            onChange={handleChangeInfo}
          />
        </div>
        <div className="w-100 center">
          <button onClick={handleSumbit} className="w-100 tc b bg-dark-green white h2" type="button">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default AddModal;
