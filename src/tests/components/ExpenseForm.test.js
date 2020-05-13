import React from 'react'
import { shallow } from 'enzyme'
import ExpenseForm from '../../components/ExpenseForm'
import toJSON from 'enzyme-to-json'
import expenses from '../fixtures/expenses'
import moment from 'moment'

test('should render ExpenseForm', () => {
    const wrapper = shallow(<ExpenseForm />)
    expect(toJSON(wrapper)).toMatchSnapshot()
})

test('should render ExpeneseForm with data', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} />)
    expect(toJSON(wrapper)).toMatchSnapshot()
})

test('should render form', () => {
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('form').simulate('submit', { preventDefault: () => {} })
    expect(wrapper.state('error').length).toBeGreaterThan(0)
    expect(toJSON(wrapper)).toMatchSnapshot()
})

test('should render description', () => {
    const value = 'New Description'
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('input').at(0).simulate('change', { target: { value } })
    expect(wrapper.state('description')).toBe(value)
    expect(toJSON(wrapper)).toMatchSnapshot()
})

test('should render Notes', () => {
    const value = 'New Note'
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('textarea').simulate('change', { target: { value } })
    expect(wrapper.state('note')).toBe(value)
})

test('should render amount with valid data', () => {
    const value = '25.95'
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('input').at(1).simulate('change', { target: { value } })
    expect(wrapper.state('amount')).toBe(value)
    expect(toJSON(wrapper)).toMatchSnapshot()
})

test('should render amount without valid data', () => {
    const value = '25.955'
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('input').at(1).simulate('change', { target: { value } })
    expect(wrapper.state('amount').length).toBe(0)
    expect(toJSON(wrapper)).toMatchSnapshot()
})

test('should render onSubmit with valid data', () => {
    const onSubmitSpy = jest.fn()
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />)
    wrapper.find('form').simulate('submit', { preventDefault: () => {} })
    expect(wrapper.state('error')).toBe('')
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expenses[0].description,
        amount: expenses[0].amount,
        note: expenses[0].note,
        createdAt: expenses[0].createdAt.valueOf()
    })
    expect(toJSON(wrapper)).toMatchSnapshot()
})

test('should render onDateChange', () => {
    const now= moment()
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('withStyles(SingleDatePicker)').prop('onDateChange')(now)
    expect(wrapper.state('createdAt')).toEqual(now)
})

test('should set calender focused', () => {
    const focused = true
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('withStyles(SingleDatePicker)').prop('onFocusChange')({ focused })
    expect(wrapper.state('calenderFocused')).toBe(focused)
})