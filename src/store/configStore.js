import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import expenseReducer from '../reducers/expenses'
import filterReducer from '../reducers/filters'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    combineReducers({
        expenses: expenseReducer,
        filters: filterReducer
}),
composeEnhancers(applyMiddleware(thunk))
)

export default store