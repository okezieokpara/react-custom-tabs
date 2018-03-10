import React, {Component} from 'react';
import PropTypes from 'prop-types';

const DefaultTab = ({isActive, linkClassName, activeClass, tabTitle, tabIndex, onClick, iconClassName}) => (
  <li className="nav-item">
    <a className={`nav-link ${linkClassName || ''} ${isActive ? activeClass || 'active' : ''}`} role="tab" aria-controls={`${tabTitle || 'Tab ' + tabIndex}`} aria-expanded={isActive} aria-selected={isActive} onClick={onClick} href={null} style={{cursor: 'pointer'}}>
      <i className={`tab-icon ${iconClassName ? iconClassName : ''}`}/>
      {`${tabTitle || 'Tab ' + tabIndex}`}
    </a>
  </li>
);

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
DefaultTab.propTypes = {
  onClick: PropTypes.func,
  activeClass: PropTypes.string,
  tabIndex: PropTypes.number,
  isActive: PropTypes.bool,
  iconClassName: PropTypes.string,
  linkClassName: PropTypes.string,
  tabTitle: PropTypes.string
};
export default Tab;
