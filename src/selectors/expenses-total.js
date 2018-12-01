// Total expenses
export default (expenses) => {
    let var1 = expenses.map(expense => expense.amount).reduce((total,amt) => total + amt, 0);
    let var2 = expenses.reduce((total,expense) => total + expense.amount, 0);
    return var2;
};