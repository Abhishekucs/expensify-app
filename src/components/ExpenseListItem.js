import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

const ExpenseListItem = ({ id, description, createdAt, amount }) => (
    <Link className="list-item" to={`/edit/${id}`}>
        <div>
            <h3 className="list-item__title">{description}</h3>
            <span className="list-item__sub-title">{moment(createdAt).format('MMM Do, YYYY')}</span>
        </div>
        <h3 className="list-item__data"><span>Rs</span> {new Intl.NumberFormat('en-IN').format(amount)}</h3>
    </Link>
)

export default ExpenseListItem