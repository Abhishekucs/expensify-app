import React from 'react'
import { shallow } from 'enzyme'
import {ExpensesSummary} from '../../components/ExpensesSummary'
import toJSON from 'enzyme-to-json'

test('should render 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={3500}/>)
    expect(toJSON(wrapper)).toMatchSnapshot()
})

test('should render multiple expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={22} expensesTotal={458231568}/>)
    expect(toJSON(wrapper)).toMatchSnapshot()
})