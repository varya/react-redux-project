import React, {Component, PropTypes} from 'react';
import style from './style.css';

import Button from '../Button';
import Icon from '../Icon';

/**
 * Cart
 */
export default class Cart extends Component {

  static propTypes = {
    /**
     * Amount of goods in the cart
     */
    size: PropTypes.number
  }

  static defaultProps = {
    size: 0
  }

  render () {
    return (
      <Button className={style.cart}>
        <Icon url={require("./cart.svg")}/>
        <span className={style.size}>
          {this.props.size}
        </span>
      </Button>
    )
  }

}
