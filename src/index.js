import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux'
import reducer from './redux/modules/reducer';
import { Provider } from 'react-redux';

import AddToCartButton from './containers/AddToCartButton';
import Cart from './components/Cart';

import {connect} from 'react-redux';

let store = createStore(reducer);

const CartWithStore = connect(
    state => ({size: state.cart.goods})
    )(Cart);

ReactDOM.render(
  <Provider store={store} key="provider">
    <App/>
  </Provider>
  ,
  document.getElementById('root')
);

const App = () => {

  return (
    <div>
      button:
      <AddToCartButton/>
      <br/>
      cart:
      <CartWithStore/>
    </div>
  )

}
