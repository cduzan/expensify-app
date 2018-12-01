import React from 'react';
import { shallow } from 'enzyme';

import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should render ExpensesSummary with 0 expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={0} expensesTotal={0} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesSummary with 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={235} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesSummary with multiple expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={3} expensesTotal={1405} />);
    expect(wrapper).toMatchSnapshot();
});