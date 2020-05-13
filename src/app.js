import React from 'react';
import ReactDOM from 'react-dom';
import AppRouters from './routers/AppRouters';
import store from './store/configStore'
import { Provider } from 'react-redux'
import 'normalize.css/normalize.css'
import './styles/style.scss'
import 'react-dates/lib/css/_datepicker.css';

const jsx = (
    <Provider store={store}>
        <AppRouters />
    </Provider>
)


ReactDOM.render(jsx, document.getElementById('app'))