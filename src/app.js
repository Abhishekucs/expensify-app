import React from 'react';
import ReactDOM from 'react-dom';
import AppRouters from './routers/AppRouters';
import { history } from './routers/AppRouters';
import { startSetExpenses } from '../src/actions/expenses'
import store from './store/configStore'
import { Provider } from 'react-redux'
import 'normalize.css/normalize.css'
import './styles/style.scss'
import 'react-dates/lib/css/_datepicker.css';
import  { firebase } from './firebase/firebase'
import { login, logout } from './actions/auth';

const jsx = (
    <Provider store={store}>
        <AppRouters />
    </Provider>
)

let hasRendered = false;
const renderApp = () => {
    if(!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true;
    }
}

firebase.auth().onAuthStateChanged((user) => {
    if(user) {
        store.dispatch(login(user.uid))
        store.dispatch(startSetExpenses()).then(() => {
            renderApp();
            if(history.location.pathname === '/') {
                history.push('/Dashboard')
            }
        })    
    } else {
        store.dispatch(logout())
        renderApp();
        history.push('/')
    }
})