import { createStore, combineReducers } from 'redux';
import { v4 as uuidv4 } from 'uuid'

// ADD_EXPENSE
const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuidv4(),
        description,
        note,
        createdAt,
        amount
    }
})

// REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
})

// EDIT_EXPENSE
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})

// SET_TEXT_FILTER
const setTextFilter = ({ text = '' } = {}) => ({
    type: 'SET_TEXT_FILTER',
    text
})
// SORT_BY_DATE
const sortByDate = () => ({
    type: 'SORT_BY_DATE',
    sortBy: 'date'
})
// SORT_BY_AMOUNT
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT',
    sortBy: 'amount'
})
// SET_START_DATE
const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
})
// SET_END_DATE
const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
})

// Expense Reducer

const expenseReducerInitialState = []

const expenseReducer = (state = expenseReducerInitialState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ]
        case 'REMOVE_EXPENSE':
            return state.filter((expense) => {
                return expense.id !== action.id
            })
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                return {
                    ...expense,
                    ...action.updates
                }
            })
        default:
            return state
    }
}

// Filter Reducer

const filterReducerInitialState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

const filterReducer = (state = filterReducerInitialState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: action.sortBy
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: action.sortBy
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }
        default:
            return state
    }
}

const store = createStore(
    combineReducers({
        expenses: expenseReducer,
        filters: filterReducer
}))

const visibleExpenseData = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())

        return startDateMatch && endDateMatch && textMatch
    }).sort((a, b) => {
        if(sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1 : -1
        } else if(sortBy === 'amount') {
            return a.amount > b.amount ? -1 : 1
        }
    })
}


store.subscribe(() => {
    const state = store.getState()
    const visibleExpenses = visibleExpenseData(state.expenses, state.filters)
    console.log(visibleExpenses)
})

const expenseOne = store.dispatch(addExpense({ description: 'rent', amount: 3500, createdAt: -21000}))
const expenseTw0 = store.dispatch(addExpense({ description: 'electricity bill', amount: 5000, createdAt: -1000}))
// store.dispatch(removeExpense({ id: expenseOne.expense.id }))
// store.dispatch(editExpense(expenseTw0.expense.id, { amount: 10000 }))

// store.dispatch(setTextFilter({ text: 'Rent' }))
// store.dispatch(setTextFilter())

store.dispatch(sortByAmount())
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(125))
// store.dispatch(setStartDate())
// store.dispatch(setEndDate(1250))

const demoState = {
    expenses: [{
        id: '23',
        description: 'March rent',
        note: 'Last rent for this address',
        amount: 3500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    }
}