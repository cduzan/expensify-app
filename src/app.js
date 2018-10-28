// Third-Party Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// Components
import AppRouter from './routers/AppRouter';

// Redux
import configureStore from './store/configuratStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpense from './selectors/expenses';

// Style
import 'normalize.css/normalize.css';   // Note: node module that sets all browsers to use a default styling
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';   // Note: import datepicker css universally


const store = configureStore();

// Note: Provider sets the redux store that all our components will have access to
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
