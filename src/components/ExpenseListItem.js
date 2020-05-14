import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

const ExpenseListItem = ({ id, description, createdAt, amount }) => (
    <div>
        <Link to={`/edit/${id}`}><h1>{description}</h1></Link>
        <p>
            <span>Rs</span>{new Intl.NumberFormat('en-IN').format(amount)}
            -
            {moment(createdAt).format('MMM Do, YYYY')}
        </p>
    </div>
)

export default ExpenseListItem