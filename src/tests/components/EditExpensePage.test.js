import React from 'react';
import { shallow } from 'enzyme';

import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let expense, editExpense, removeExpense, history, wrapper;
beforeEach(() => {
    expense = expenses[2]
    editExpense = jest.fn();
    removeExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(
        <EditExpensePage 
            expense={expense} 
            editExpense={editExpense} 
            removeExpense={removeExpense} 
            history={history} />
    );
});

test('should render EditExpensePage', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle editExpense', () => {
    const newExpense = {...expense, description: 'New Credit Card'}
    wrapper.find('ExpenseForm').prop('onSubmit')(newExpense);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(editExpense).toHaveBeenLastCalledWith(expense.id, newExpense);
});

test('should handle removeExpense', () => {
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(removeExpense).toHaveBeenLastCalledWith({ id: expense.id} );
});