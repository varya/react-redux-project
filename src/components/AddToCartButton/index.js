import React, {Component, PropTypes} from 'react';
import style from './style.css';

import Button from '../Button';
import Icon from '../Icon';

/**
 * Add To Cart Button
 */
export default class AddToCartButton extends Component {

  static propTypes = {
    /**
     * Adding action
     */
    add: PropTypes.func.isRequired
  }

  render () {

    const {add} = this.props;

    return (
      <Button onClick={add}>
        <Icon url="./cart-add.svg"/>
        Add to cart
      </Button>
    )
  }

}
