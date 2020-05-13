import React from 'react'
import { shallow } from 'enzyme'
import {AddExpensePage} from '../../components/AddExpensePage'
import toJSON from 'enzyme-to-json'
import expenses from '../fixtures/expenses'

// let addExpense, history

// beforeEach(() => {
//     const addExpense = jest.fn()
//     const history = { push: jest.fn() }
// })

test('should render AddExpensePage', () => {
    const addExpense = jest.fn()
    const history = { push: jest.fn() }
    const wrapper = shallow(<AddExpensePage addExpense={addExpense} history={history} />)
    expect(toJSON(wrapper)).toMatchSnapshot();
})

test('should run onSubmit props in Expenseform', () => {
    const addExpense = jest.fn()
    const history = { push: jest.fn() }
    const wrapper = shallow(<AddExpensePage addExpense={addExpense} history={history} />)
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0])
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(addExpense).toHaveBeenLastCalledWith(expenses[0])
})