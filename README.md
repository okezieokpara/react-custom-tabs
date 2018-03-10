react-custom-tabs
=================

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

License
-------

MIT © [Okezie Okpara](https://github.com/okezieokpra)
