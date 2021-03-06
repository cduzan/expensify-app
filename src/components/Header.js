import React from 'react';
//import NavLink from 'react-router-dom';
import { NavLink } from 'react-router-dom';

// Note: NavLink allows stlying when active
const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
        <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
    </header>
);

export default Header;