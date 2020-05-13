import moment from 'moment'

const expenses = [{
    id: '1',
    description: 'Rent',
    note: '',
    amount: 3500,
    createdAt: moment(0)
}, {
    id: '2',
    description: 'water bill',
    note: '',
    amount: 5000,
    createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
    id: '1',
    description: 'electricity bill',
    note: '',
    amount: 1000,
    createdAt: moment(0).add(4, 'days').valueOf()
}]

export default expenses