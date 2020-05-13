import React from 'react'
import { shallow } from 'enzyme'
import { ExpenseListFilters } from '../../components/ExpenseListFilter'
import { filters, altFilters } from '../fixtures/filters'
import moment from 'moment'
import toJSON from 'enzyme-to-json'

let setStartDate, setEndDate, sortByAmount, sortByDate, setTextFilter, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn();
    sortByAmount = jest.fn();
    sortByDate = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(
        <ExpenseListFilters
            filters = {filters}
            setTextFilter = {setTextFilter}
            sortByAmount = {sortByAmount}
            sortByDate = {sortByDate}
            setStartDate = {setStartDate}
            setEndDate = {setEndDate}
        />
    )
})

test('should render ExpenseListFilters', () => {
    expect(toJSON(wrapper)).toMatchSnapshot()  
})

test('should render ExpenseListFilters with data', () => {
    wrapper.setProps({
        filters: altFilters
    })
    expect(toJSON(wrapper)).toMatchSnapshot()
})

test('should render when text change', () => {
    const value = 'cool'
    wrapper.find('input').simulate('change', { target: { value } })
    expect(setTextFilter).toHaveBeenLastCalledWith({ text: value })
    expect(toJSON(wrapper)).toMatchSnapshot()
})

test('should sort by date', () => {
    const value = 'date'
    wrapper.setProps({
        filters: altFilters
    })
    wrapper.find('select').simulate('change', { target: { value } })
    expect(sortByDate).toHaveBeenCalled()
    expect(toJSON(wrapper)).toMatchSnapshot()
})

test('should sort by amount', () => {
    const value = 'amount'
    wrapper.find('select').simulate('change', { target: { value } })
    expect(sortByAmount).toHaveBeenCalled()
    expect(toJSON(wrapper)).toMatchSnapshot()
})

test('should change the onChangeDate', () => {
    const startDate = moment(0).add(4, 'years')
    const endDate = moment(0).add(8, 'years')
    wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')({ startDate, endDate })
    expect(setStartDate).toHaveBeenLastCalledWith(startDate)
    expect(setEndDate).toHaveBeenLastCalledWith(endDate)
    expect(toJSON(wrapper)).toMatchSnapshot()
})

test('should set onFocusChange', () => {
    const focusedInput = 'startDate'
    wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')(focusedInput)
    expect(wrapper.state('focusedInput')).toEqual(focusedInput)
})