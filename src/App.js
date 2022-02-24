import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Header from './Components/Header/Header';
import Products from './Components/Products/Products';
import SelectedProduct from './Components/SelectedProduct/SelectedProduct';



function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path='/'>
          <Products></Products>
        </Route>
        <Route path='/selectedProduct/:id'>
          <SelectedProduct></SelectedProduct>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
