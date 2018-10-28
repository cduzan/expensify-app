import React from 'react';
import { shallow } from 'enzyme';

import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(
        <ExpenseListFilters 
            filters={filters}
            setTextFilter={setTextFilter}
            sortByDate={sortByDate}
            sortByAmount={sortByAmount}
            setStartDate={setStartDate}
            setEndDate={setEndDate} 
        />
    );
});

test('should render ExpenseListFilters correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilers with alt data correctly', () => {
    // Note: enzyme's setProps() function 
    wrapper.setProps({
        filters: altFilters
    });
    expect(wrapper).toMatchSnapshot();
});

test('should handle text change', () => {
    const value = 'textFilter';
    wrapper.find('input').simulate('change', {
        target: { value }
    });
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test('should sort by date', () => {
    // set sortBy value to 'amount' first
    wrapper.setProps({
        filters: altFilters
    });

    const value = 'date';
    wrapper.find('select').simulate('change', {
        target: { value }
    });
    expect(sortByDate).toHaveBeenCalled();
});

test('should sort by amount', () => {
    const value = 'amount';
    wrapper.find('select').simulate('change', {
        target: { value }
    });
    expect(sortByAmount).toHaveBeenCalled();
});

test('should handle date changes', () => {
    const dates = { startDate: altFilters.startDate, endDate: altFilters.endDate };
    wrapper.find('DateRangePicker').prop('onDatesChange')(dates);
    expect(setStartDate).toHaveBeenLastCalledWith(dates.startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(dates.endDate);
});

test('should handle date focus changes', () => {
    const calendarFocused = 'startDate';
    wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused);
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});