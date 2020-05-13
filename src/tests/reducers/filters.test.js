import moment from 'moment'
import filterReducer from '../../reducers/filters'

test('should test default value', () => {
    const state = filterReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

test('should test sortBy amount', () => {
    const state = filterReducer(undefined, { type: 'SORT_BY_AMOUNT', sortBy: 'amount' })
    expect(state.sortBy).toBe("amount")
})

test('should test sortBy date', () => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
    const state = filterReducer(currentState, { type: 'SORT_BY_DATE', sortBy: 'date' })
    expect(state.sortBy).toBe("date")
})

test('should filter by text', () => {
    const state = filterReducer(undefined, { type: 'SET_TEXT_FILTER', text: 'bill' })
    expect(state.text).toBe('bill')
})

test('should set start date', () => {
    const state = filterReducer(undefined, { type: 'SET_START_DATE', startDate: moment().startOf('month') })
    expect(state.startDate).toEqual(moment().startOf('month'))
})

test('should set end date', () => {
    const state = filterReducer(undefined, { type: 'SET_END_DATE', endDate: moment().endOf('month') })
    expect(state.endDate).toEqual(moment().endOf('month'))
})