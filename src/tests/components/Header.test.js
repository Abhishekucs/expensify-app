import React from 'react'
import { shallow } from 'enzyme'
import { Header } from '../../components/Header'
import toJSON from 'enzyme-to-json'

test('should render Header component', () => {
    const wrapper = shallow(<Header startLogout={() => {}}/>)
    expect(toJSON(wrapper)).toMatchSnapshot();
})

test('should startLogout on button click', () => {
    const startLogout = jest.fn();
    const wrapper = shallow(<Header startLogout={startLogout}/>)
    wrapper.find('button').simulate('click')
    expect(startLogout).toHaveBeenCalled()
    expect(toJSON(wrapper)).toMatchSnapshot()
})