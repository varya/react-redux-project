import React, {Component, PropTypes} from 'react';
import style from './style.css';

export default class Button extends Component {

  static propTypes = {
    /**
     * classname
     */
    className: PropTypes.string
  }

  render () {

    const props = this.props;
    const className = props.className? props.className + ' ' + style.button : style.button;

    console.log(className)

    return (
      <button className={className} {...props}>
        {this.props.children}
      </button>
    )
  }

}
