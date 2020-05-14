import getExpensesTotal from '../../selectors/expenses-total'
import expenses from '../fixtures/expenses'

test('should return sum of all the expenses', () => {
    const total = getExpensesTotal(expenses)
    expect(total).toBe(9500)
})

test('should return amount with single expense', () => {
    const result = getExpensesTotal([expenses[0]])
    expect(result).toBe(3500)
})

test('should return 0 when no expenses', () => {
    const result = getExpensesTotal([])
    expect(result).toBe(0)
})