import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startAddExpense, addExpense, removeExpense, editExpense, setExpenses, startSetExpenses, startRemoveExpenses, startEditExpenses } from '../../actions/expenses'
import expenses from '../fixtures/expenses'
import database from '../../firebase/firebase';

const uid = 'thisisprivateuid';
const defaultAuthState = { authReducer: { uid } };
const mockStore = configureStore([thunk])

beforeEach((done) => {
    const expensesData = {};
    expenses.forEach(({ id, description, amount, note, createdAt }) => {
        expensesData[id] = { description, amount, note, createdAt };
    });
    database.ref(`users/${uid}/expenses`).set(expensesData).then(() => done());
});

test('should remove expense, removeExpense action generator', () => {
    const action = removeExpense({id: '123abcd'})
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abcd'
    })
})

test('should remove expense from firebase', (done) => {
    const store = mockStore(defaultAuthState)
    store.dispatch(startRemoveExpenses({id: expenses[0].id})).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'REMOVE_EXPENSE',
            id: expenses[0].id
        })
        done();
    })
})

test('should edit expense, editExpense action generator', () => {
    const action = editExpense('123abcd', { description: 'Water Bill' })
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abcd',
        updates: {
            description: 'Water Bill'
        }
    })
})

test('should update expense in firebase', (done) => {
    const store = mockStore(defaultAuthState)
    const id = expenses[1].id
    const updates = {
        amount: 6000
    }
    store.dispatch(startEditExpenses(id, updates)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'EDIT_EXPENSE',
            id,
            updates
        })
        done();
    })
})

test('should add expense with data, addExpense action generator', () => {
    const action = addExpense(expenses[1])
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[1]
    })
})

test('should add expense using startAddExpense function', (done) => {
    const store = mockStore(defaultAuthState)
    const expenseData = {
        description : 'water Bill',
        note : 'Last month water bill',
        amount : 4500,
        createdAt : 85620
    }
    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });

        return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value')
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData)
        done();
    })
})

test('should add expense with default data using startAddExpense function', (done) => {
    const store = mockStore(defaultAuthState)
    const expenseData = {
        description : '',
        note : '',
        amount : 0,
        createdAt : 0
    }
    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });

        return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value')
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData)
        done();
    })
})

test('should setup set expense with data', () => {
    const action = setExpenses(expenses)
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses
    })
})

test('should set expenses data from firebase', (done) => {
    const store = mockStore(defaultAuthState);
    store.dispatch(startSetExpenses()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'SET_EXPENSES',
            expenses: expenses
        });
        done();
    })
})