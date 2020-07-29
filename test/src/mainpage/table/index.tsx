import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useQuery } from 'react-query';
import TableHeader from './TableHeader';
import { Dessert, StoreReducer } from '../../types';
import TableRow from './TableRow';
import getDesserts from '../../redux/actions/dessertActions';
import { getDessertsApi } from '../../api/index';

interface Props {
  selectedDessertList: Dessert[];
  changeSelectedDessertList: (newDesserts: Dessert[]) => void;
}

const Index = ({ selectedDessertList, changeSelectedDessertList } : Props) => {
  const dispatch = useDispatch();
  const dessertList: Dessert[] = useSelector((store: StoreReducer) => store.desserts.desserts);
  const { data } : any = useQuery('getDesserts', getDessertsApi);

  useEffect(() => {
    if (data) dispatch(getDesserts(data.data.desserts));
    // eslint-disable-next-line
  }, [data]);

  const handleGlobalCheckbox = (value: boolean) => {
    changeSelectedDessertList(value ? dessertList : []);
  };

  const handleCheckbox = ({ Dessert: name }: Dessert, selected: boolean) => {
    let newSelectedArray: Dessert[] = [];
    if (!selected) {
      const selectedDessert: Dessert = dessertList.filter((dessert: Dessert) => dessert.Dessert === name)[0];
      newSelectedArray = [...selectedDessertList, selectedDessert];
    } else newSelectedArray = selectedDessertList.filter((dessert: Dessert) => dessert.Dessert !== name);
    changeSelectedDessertList(newSelectedArray);
  };

  const allChecked: boolean = selectedDessertList.length === dessertList.length;

  return (
    <div className="overflow-auto">
      <TableHeader allChecked={allChecked} handleGlobalCheckbox={handleGlobalCheckbox} />
      {dessertList?.map((dessert: Dessert, index: number) => {
        const selected: boolean = selectedDessertList.includes(dessert);
        return <TableRow key={index} dessert={dessert} handleCheckbox={handleCheckbox} selected={selected} />;
      })}
    </div>
  );
};

export default Index;
