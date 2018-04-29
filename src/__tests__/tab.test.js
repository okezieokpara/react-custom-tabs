import React from 'react';
import ReactDOM from 'react-dom';
import Tab from './components/tabs';

it('Renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Tab />, div);
    ReactDOM.unmountComponentAtNode(div);
});