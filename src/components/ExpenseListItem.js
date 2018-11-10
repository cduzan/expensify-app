// Third Party Dependencies
import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
    <div>
        <Link to={`/edit/${id}`}>
            <h3>{description}</h3>
        </Link>
        <p>
            {numeral(amount / 100).format('$0,0.00')} 
            - 
            {moment(createdAt).format('MMMM Do, YYYY')}
        </p>
    </div>
);

// Note: connect() without mapStateToProps doesn't pass any redux state but it allows you to use dispatch in the props
export default ExpenseListItem;
