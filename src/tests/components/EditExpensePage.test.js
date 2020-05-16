import React from 'react'
import { shallow } from 'enzyme'
import { EditExpensePage } from '../../components/EditExpensePage'
import toJSON from 'enzyme-to-json'
import expenses from '../fixtures/expenses'

test('should render EditExpensePage', () => {
    const startEditExpenses = jest.fn();
    const startRemoveExpenses = jest.fn();
    const history = { push: jest.fn() }

    const wrapper = shallow(<EditExpensePage expense={expenses[0]} startEditExpenses={startEditExpenses} startRemoveExpenses={startRemoveExpenses} history={history} />)
    expect(toJSON(wrapper)).toMatchSnapshot()
})

test('should handle editExpense', () => {
    const startEditExpenses = jest.fn();
    const startRemoveExpenses = jest.fn();
    const history = { push: jest.fn() }

    const wrapper = shallow(<EditExpensePage expense={expenses[0]} startEditExpenses={startEditExpenses} startRemoveExpenses={startRemoveExpenses} history={history} />)
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0])
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(startEditExpenses).toHaveBeenLastCalledWith(expenses[0].id, expenses[0])
    expect(toJSON(wrapper)).toMatchSnapshot()
})

test('should handle startRemoveExpense', () => {
    const startEditExpenses = jest.fn();
    const startRemoveExpenses = jest.fn();
    const history = { push: jest.fn() }

    const wrapper = shallow(<EditExpensePage expense={expenses[0]} startEditExpenses={startEditExpenses} startRemoveExpenses={startRemoveExpenses} history={history} />)
    wrapper.find('button').simulate('click')
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(startRemoveExpenses).toHaveBeenLastCalledWith( {id: expenses[0].id} )
    expect(toJSON(wrapper)).toMatchSnapshot()
})