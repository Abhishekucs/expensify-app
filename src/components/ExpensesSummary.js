import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import getExpensesTotal from '../selectors/expenses-total'
import visibleExpenseData from '../selectors/expense'

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses'
    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">Viewing <span>{expenseCount}</span> {expenseWord} totalling <span>{ new Intl.NumberFormat('en-IN').format(expensesTotal) }</span></h1>
                <div className="page-header__actions">
                    <Link className="button" to="/create">Add Expense</Link>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    const expenseData = visibleExpenseData(state.expenses, state.filters)
    return {
        expenseCount: expenseData.length,
        expensesTotal: getExpensesTotal(expenseData)
    }
}

export default connect(mapStateToProps)(ExpensesSummary)