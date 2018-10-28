// Expenses Reducer
const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            // Note: Array spread operator
            return [...state, action.expense];
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id );
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    // Note: Object spread operator
                    return {
                        ...expense, 
                        ...action.updates
                    };
                }
                else {
                    return expense;
                }
            })
        default:
            return state;
    }
};