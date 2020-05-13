import { addExpense, removeExpense, editExpense } from '../../actions/expenses'

test('should remove expense, removeExpense action generator', () => {
    const action = removeExpense({ id: '123abcd' })
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abcd'
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

test('should add expense with data, addExpense action generator', () => {
    const expenseData = {
        description: 'Electricity Bill',
        amount: 5000,
        note: 'This month electricity bill',
        createdAt: 1000
    }
    const action = addExpense(expenseData)
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
})

test('should add expense with default data, addExpense action generator', () => {
    const expenseData = {
        description : '',
        note : '',
        amount : 0,
        createdAt : 0
    }
    const action = addExpense(expenseData)
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
})