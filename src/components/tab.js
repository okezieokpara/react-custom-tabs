import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {DefaultTab} from './defaultTabTemplate';


class Tab extends Component {
  constructor(props) {
    super(props);
    this.handleTabClick = this.handleTabClick.bind(this);
  }
  handleTabClick(event) {
    event.preventDefault();
    this.props.onClick(this.props.tabIndex);
    if (this.props.onActivate) {
      this.props.onActivate(this.props.tabIndex, this.props.id);
    }
  }
  render() {
    if (this.props.tabTemplate) {
      return React.createElement(this.props.tabTemplate, {...this.props, onClick: this.handleTabClick});
    }
    return (
      <DefaultTab {...this.props} onClick={this.handleTabClick}/>
    );
  }
  static propTypes = {
    tabTemplate: PropTypes.node,
    onClick: PropTypes.func,
    onActivate: PropTypes.func,
    tabIndex: PropTypes.number,
    id: PropTypes.string
  };
}
export default Tab;
