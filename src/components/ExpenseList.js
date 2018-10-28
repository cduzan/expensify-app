import React from 'react';
import { connect } from 'react-redux';

import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

// Note: props can now access what is passed from the redux state in the mapStateToProps function
export const ExpenseList = (props) => (
    <div>
        {
            props.expenses.length === 0 ? (
                <p>No expenses</p>
            ) : (
                props.expenses.map((expense) => (
                    <ExpenseListItem key={expense.id} {...expense} />
                ))
            )
        }
    </div>
);

// Note: standard practice for the function that maps the redux state to the component props
const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
};

// Note: first function is for the redux state mapping
//       second function is for the component you're sending to the Higher Order Compnent
export default connect(mapStateToProps)(ExpenseList);