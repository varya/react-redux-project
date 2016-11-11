import React, {Component, PropTypes} from 'react';
import style from './style.css';

/**
 * Icon component
 */
export default class Icon extends Component {

  static propTypes = {
    /**
     * Relative path to an icon
     */
    url: PropTypes.string.isRequired
  }

  // TODO: make SVG fallback
  render () {

    // Resolve URL if not yet resolved
    const url = (this.props.url.indexOf('--resolved') == -1) ? require(this.props.url) : this.props.url;

    return (
        <img src={url} className="hidden-ie"/>
    )
  }

}
