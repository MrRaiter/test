import React from 'react';
import './App.css';
import {
  Route, Switch, BrowserRouter,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import Mainpage from './mainpage';
import AddPage from './mainpage/add-page';
import store from './redux/store';
import './css/tachyons.css';
import './css/tachyons.min.css';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Mainpage} />
        <Route path="/adddessert" component={AddPage} />
      </Switch>
    </BrowserRouter>
  </Provider>
);

export default App;
