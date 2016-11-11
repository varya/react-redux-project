import React, {Component, PropTypes} from 'react';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {add} from '../../redux/modules/cart.js';

import Button from '../../components/AddToCartButton';

@connect(
    state => ({goods: state.goods}),
    dispatch => bindActionCreators({add}, dispatch))
/**
 * Active container for Add to Cart Button
 */
export default class AddToCartButtonContainer extends Component {

  static propTypes = {
    /**
     * adding action
     */
    add: PropTypes.func.isRequired
  }

  render () {

    const {add} = this.props;

    return (
      <Button add={add}/>
    )
  }

}
