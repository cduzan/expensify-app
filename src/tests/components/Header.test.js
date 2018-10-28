import React from 'react';
import { shallow } from 'enzyme';

import Header from '../../components/Header';


test('should render Header correctly', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();

    // // Note: testing Components requires using the react-test-renderer library
    // // Note: ReactShallowRenderer is used for simple classes where UI is just getting serverd up, now a whole lot of complexity
    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header />);
    
    // // Note: we will use snapshots to test. These allows you to track changes over time
    // // Note: these snapshots are stored in the same parent directory under the __snapshots__ directory
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
});