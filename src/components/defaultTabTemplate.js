import React from 'react';
export const DefaultTab = ({isActive, linkClassName, activeClass, tabTitle, tabIndex, onClick, iconClassName}) => (
    <li className="nav-item">
      <a className={`nav-link ${linkClassName || ''} ${isActive ? activeClass || 'active' : ''}`} role="tab" aria-controls={`${tabTitle || 'Tab ' + tabIndex}`} aria-expanded={isActive} aria-selected={isActive} onClick={onClick} href={null} style={{cursor: 'pointer'}}>
        <i className={`tab-icon ${iconClassName ? iconClassName : ''}`}/>
        {`${tabTitle || 'Tab ' + tabIndex}`}
      </a>
    </li>
  );