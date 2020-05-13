import React from 'react';
import ReactDOM from 'react-dom';
import AppRouters from './routers/AppRouters';
import store from './store/configStore'
import { Provider } from 'react-redux'
import { addExpense, editExpense, removeExpense } from './actions/expenses'
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from './actions/filters'
import visibleExpenseData from './selectors/expense'
import 'normalize.css/normalize.css'
import './styles/style.scss'
import 'react-dates/lib/css/_datepicker.css';

store.dispatch(addExpense({ description: 'Water Bill', amount: 5000, createdAt: -1000 }))
store.dispatch(addExpense({ description: 'Electricity Bill', amount: 10000, createdAt: 1000 }))
store.dispatch(addExpense({ description: 'Rent', amount: 15000, createdAt: -2000 }))
// store.dispatch(setTextFilter({ text: 'bill' }))
// store.dispatch(sortByDate(1000))

const state = store.getState()
const visibleExpense = visibleExpenseData(state.expenses, state.filters)
console.log(visibleExpense)

const jsx = (
    <Provider store={store}>
        <AppRouters />
    </Provider>
)


ReactDOM.render(jsx, document.getElementById('app'))