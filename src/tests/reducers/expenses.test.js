import expenses from '../fixtures/expenses'
import expenseReducer from '../../reducers/expenses'

test('should set default value', () => {
    const state = expenseReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual([])
})

test('should remove expense with id', () => {
    const state = expenseReducer(expenses, { type: 'REMOVE_EXPENSE', id: expenses[1].id })
    expect(state).toEqual([ expenses[0], expenses[2] ])
})

test('should not remove expense without id', () => {
    const state = expenseReducer(expenses, { type: 'REMOVE_EXPENSE', id: '4' })
    expect(state).toEqual(expenses)
})

test('should add an expense', () => {
    const expense = {
        id: '5',
        description: 'Gas Bill',
        note: '',
        amount: 6000,
        createdAt: 0
    }
    const state = expenseReducer(expenses, { type: 'ADD_EXPENSE', expense })
    expect(state).toEqual([ ...expenses, expense ])
})

test('should edit expense with id', () => {
    const state = expenseReducer(expenses, { type: 'EDIT_EXPENSE', id: expenses[2].id, updates: { description: 'Gas bill' } })
    expect(state[2].description).toBe('Gas bill')
})

test('should not edit expense without id', () => {
    const state = expenseReducer(expenses, { type: 'EDIT_EXPENSE', id: '9', updates: { description: 'WIFI bill' } })
    expect(state).toEqual(expenses)
})