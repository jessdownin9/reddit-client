import React from "react";
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
    it('SearchTerm state is initialized to null', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.state('searchTerm').toBe(null));
    })
})