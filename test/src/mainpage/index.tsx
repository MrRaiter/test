import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import MainHeader from './MainHeader';
import Table from './table';
import { Dessert } from '../types';
import getDesserts from '../redux/actions/dessertActions';
import { deleteDessertApi } from '../api/index';

const Index = () => {
  const [selectedDessertList, setSelectedDessertList] = useState<Dessert[]>([]);
  const dispatch = useDispatch();

  const changeSelectedDessertList = (newDessertsList: Dessert[]) => {
    setSelectedDessertList(newDessertsList);
  };

  const handleDelete = async () => {
    const { data }: any = await deleteDessertApi(selectedDessertList);
    setSelectedDessertList([]);
    dispatch(getDesserts(data.deleteDesserts));
  };

  return (
    <div className="pa3 mw8 center bg-light-gray">
      <MainHeader selected={selectedDessertList.length} handleDelete={handleDelete} />
      <Table selectedDessertList={selectedDessertList} changeSelectedDessertList={changeSelectedDessertList} />
    </div>
  );
};

export default Index;
