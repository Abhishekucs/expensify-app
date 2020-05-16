import React from 'react';
import ReactDOM from 'react-dom';
import AppRouters from './routers/AppRouters';
import { startSetExpenses } from '../src/actions/expenses'
import store from './store/configStore'
import { Provider } from 'react-redux'
import 'normalize.css/normalize.css'
import './styles/style.scss'
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase'

const jsx = (
    <Provider store={store}>
        <AppRouters />
    </Provider>
)

store.dispatch(startSetExpenses()).then(() => {
    ReactDOM.render(jsx, document.getElementById('app'))
})