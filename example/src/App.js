
import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/custom.css';
import {Tab, Tablist} from 'react-custom-tabs';
import {NavHeader} from './components/navHeader';

export default class App extends Component {
  render() {
    return (
      <div>
        <NavHeader/>
        <main className="container">
          <div className="starter-template">
            <h1>Demonstrates React Custom Tabs</h1>
            <p className="lead">This is a demo for react custom tabs</p>
          </div>
          <section>
            <h3>Default -<small className="text-muted">Uses bootstrap</small></h3>
            <Tablist>
              <Tab tabTitle="First tab" >
                <h3>Tab content 1</h3>
              </Tab>
              <Tab tabTitle="Second Tab">
                <h3>Tab content 2</h3>
              </Tab>
              <Tab tabTitle="Third Tab">
                <hh3>Tab content 2</hh3>
              </Tab>
            </Tablist>
          </section>
        </main>
      </div>
    );
  }
}
