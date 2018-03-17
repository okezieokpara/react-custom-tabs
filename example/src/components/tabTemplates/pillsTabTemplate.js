import React from 'react';
import PropTypes from 'prop-types';
export const PillsTabTemplate = ({linkClassName, isActive, activeClass, tabTitle, tabIndex, onClick, iconClassName}) => (
  <li className="nav-item">
    <a className={`nav-link ${linkClassName || ''} ${isActive ? activeClass || 'active' : ''}`} role="tab" aria-controls={`${tabTitle || 'Tab ' + tabIndex}`} aria-expanded={isActive} aria-selected={isActive} onClick={onClick} href={null} style={{cursor: 'pointer'}}>
      <i className={`tab-icon ${iconClassName ? iconClassName : ''}`}/>
      {`${tabTitle || 'Tab ' + tabIndex}`}
    </a>
  </li>
);
PillsTabTemplate.propTypes = {
  onClick: PropTypes.func,
  activeClass: PropTypes.string,
  tabIndex: PropTypes.number,
  isActive: PropTypes.bool,
  iconClassName: PropTypes.string,
  linkClassName: PropTypes.string,
  tabTitle: PropTypes.string
};
