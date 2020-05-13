import moment from 'moment'

const filters = {
    text: '',
    startDate: undefined,
    endDate: undefined,
    sortBy: 'date'
}

const altFilters = {
    text: 'rent',
    startDate: moment(0),
    endDate: moment(0),
    sortBy: 'amount'
}

export { filters, altFilters }