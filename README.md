react-custom-tabs
=================

[![Build Status](https://travis-ci.org/okezieokpara/react-custom-tabs.svg?branch=master)](https://travis-ci.org/okezieokpara/react-custom-tabs)

Install
-------

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ bash
npm install react-custom-tabs --save 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Usage
-----

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ jsx
import React, { Component } from 'react'
import {Tab, Tablist} from 'react-custom-tabs';

class Example extends Component {
  render () {
    return (
      <Tablist>
         <Tab tabTitle="First tab" >
             <h3>Tab content 1</h3>
         </Tab>
       <Tab tabTitle="Second Tab">
         <h3>Tab content 2</h3>
       </Tab>
       <Tab tabTitle="Third Tab">
         <h3>Tab content 2</h3>
       </Tab>
     </Tablist>
    )
  }
}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

### Custom template

You can specify your own template for both the `<Tablist> `component and each
individual `<Tab>` components

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ jsx
import {PillsTablistTemplate, PillsTabTemplate} from './components/tabTemplates';
 <Tablist template={PillsTablistTemplate}>
  <Tab tabTitle="First tab" template={PillsTabTemplate}>
    <h3>Tab content 1</h3>
      <p>Content paragraph</p>
  </Tab>
</Tablist
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

To create a custom `<Tablist>` component, you will typically create something
that looks like this:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ jsx
import React from 'react';
export const PillsTablistTemplate = ({tabListHeaderTemplate, activeTabClass, tabListBodyTemplate}) => (
  <div className="tabs">
    <ul className="nav nav-pills">
      {tabListHeaderTemplate}

    </ul>
    <div className="tab-content">
      <div className={`tab-pane fade show ${activeTabClass || 'active'}`}>
        {tabListBodyTemplate}
      </div>
    </div>
  </div>
);

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

and to create a custom `<Tab>` tab template you will create something like this:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ jsx
import React from 'react';
export const PillsTabTemplate = ({linkClassName, isActive, activeClass, tabTitle, tabIndex, onClick, iconClassName}) => (
  <li className="nav-item">
    <a className={`nav-link ${linkClassName || ''} ${isActive ? activeClass || 'active' : ''}`} role="tab" aria-controls={`${tabTitle || 'Tab ' + tabIndex}`} aria-expanded={isActive} aria-selected={isActive} onClick={onClick} href={null} style={{cursor: 'pointer'}}>
      <i className={`tab-icon ${iconClassName ? iconClassName : ''}`}/>
      {`${tabTitle || 'Tab ' + tabIndex}`}
    </a>
  </li>
);
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

### Tab Events

You can specify a callback for when a tab is activated. Here is a sample

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ jsx
 <Tablist>
  <Tab tabTitle="First tab" onActivate={() => window.alert('First tab was activated')}>
      <h3>Tab content 1</h3>
        <p>Content paragraph</p>
  </Tab>
</Tablist>
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

License
-------

MIT © [Okezie Okpara](https://github.com/okezieokpra)
