import React from 'react';
import {shallow, mount, render} from 'enzyme';
import sinon from 'sinon';
import App from '../client/component/App.jsx';

describe('<App />', ()=> {
    it('calls componentDidMount', () => {
        sinon.spy(App.prototype, 'componentDidMount');
        const wrapper = mount(<App />);
        expect(App.prototype.componentDidMount).to.have.property('callCount', 1);
      });
});

/**
 * This is where I would test the App component.
 * I would check if my app is getting the correct information from componentDidMount and doing the correct full render afterwards
 * I would check if my app is not rendering the 'broken' div line that should only show if no data came back form the database
 */