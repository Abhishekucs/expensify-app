import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { startEditExpenses } from '../actions/expenses'
import { startRemoveExpenses } from '../actions/expenses'

export class EditExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.startEditExpenses(this.props.expense.id ,expense)
        this.props.history.push('/')
    }
    onClick = (e) => {
        this.props.startRemoveExpenses( {id: this.props.expense.id} )
        this.props.history.push('/')
    }
    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Edit Expense</h1>
                    </div>
                </div>
                <div className="content-container">
                    <ExpenseForm 
                        expense = {this.props.expense}
                        onSubmit={this.onSubmit}
                    />
                    <button className="button button--secondary" onClick ={this.onClick}>Remove Expense</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => {
            return expense.id === props.match.params.id
        })
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        startEditExpenses: (id, expense) => dispatch(startEditExpenses(id, expense)),
        startRemoveExpenses: (data) => dispatch(startRemoveExpenses(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage)