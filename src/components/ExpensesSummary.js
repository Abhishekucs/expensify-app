import React from 'react'
import { connect } from 'react-redux'
import getExpensesTotal from '../selectors/expenses-total'
import visibleExpenseData from '../selectors/expense'

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses'
    return (
        <div>
            <h1>Viewing {expenseCount} {expenseWord} totalling { new Intl.NumberFormat('en-IN').format(expensesTotal) }</h1>
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