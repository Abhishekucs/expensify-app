import moment from 'moment'
import { setTextFilter, setStartDate, setEndDate, sortByAmount, sortByDate } from '../../actions/filters'

test('should generate set start date action, action generator', () => {
    const startDate = moment(0)
    const action = setStartDate(startDate)
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })
})

test('should generate set end date action, action generator', () => {
    const action = setEndDate(moment(0))
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })
})

test('should generate set sort by amount, action generator', () => {
    const action = sortByAmount()
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT',
        sortBy: 'amount'
    })
})

test('should generate set sort by date, action generator', () => {
    const action = sortByDate()
    expect(action).toEqual({
        type: 'SORT_BY_DATE',
        sortBy: 'date'
    })
})

test('should generate set text filter with data, action generator', () => {
    const textData = {
        text: 'bill'
    }
    const action = setTextFilter(textData)
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'bill'
    })
})

test('should generate set text filter without data, action generator', () => {
    const action = setTextFilter({ text: '' })
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
})