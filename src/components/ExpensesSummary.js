import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';

import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

// Note: props can now access what is passed from the redux state in the mapStateToProps function
export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
    const formattedExpensesTotal = numeral(expensesTotal).format('$0,0.00');
    return (
        <div>
            <h1>
                Viewing {expenseCount} {expenseWord} totalling {formattedExpensesTotal}
            </h1>
        </div>
    )
};

// Note: standard practice for the function that maps the redux state to the component props
const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    return {
        expenseCount: visibleExpenses.length,
        expensesTotal: selectExpensesTotal(visibleExpenses)
    };
};

// Note: first function is for the redux state mapping
//       second function is for the component you're sending to the Higher Order Compnent
export default connect(mapStateToProps)(ExpensesSummary);