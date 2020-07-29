import React, { MouseEvent } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { resetDessertsApi } from '../api/index';
import getDesserts from '../redux/actions/dessertActions';

interface Props {
  selected: number;
  handleDelete: () => void;
}

const MainHeader = ({ selected, handleDelete } : Props) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleAdd = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    history.push('/adddessert');
  };

  const handleReset = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const { data }: any = await resetDessertsApi();
    if (data) dispatch(getDesserts(data.resetDesserts));
  };

  return (
    <>
      <div className="flex justify-between mb2">
        <span className="b f2">
          Nutrition List
        </span>
        <button onClick={handleReset} type="button" className="f6 br2 link dim ph3 pv2 dib white bg-dark-green">RESET DATA</button>
      </div>
      <div className="flex justify-between bg-washed-red ph3 pv1">
        <p className="b dib v-mid hot-pink">{`${selected} selected`}</p>
        <div className="inline-flex items-center">
          <button onClick={handleAdd} type="button" className="b--none b f6 link dim ph3 pv2 dib green bg-white">+ ADD NEW</button>
          <button onClick={handleDelete} type="button" className="ml2 b--none b f6 link dim ph3 pv2 dib red bg-white">DELETE</button>
        </div>
      </div>
    </>
  );
};

export default MainHeader;
