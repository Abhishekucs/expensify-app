import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { editExpense } from '../actions/expenses'
import { removeExpense } from '../actions/expenses'

export class EditExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.editExpense(this.props.expense.id ,expense)
        this.props.history.push('/')
    }
    onClick = (e) => {
        this.props.removeExpense({ id: this.props.expense.id })
        this.props.history.push('/')
    }
    render() {
        return (
            <div>
                <ExpenseForm 
                    expense = {this.props.expense}
                    onSubmit={this.onSubmit}
                />
                <button onClick ={this.onClick}>Remove</button>
            </div>
        )
    }
}

// const EditExpensePage = (props) => (
//     <div>
//         <ExpenseForm 
//             expense = {props.expense}
//             onSubmit={(expense) => {
//                 props.dispatch(editExpense(props.match.params.id ,expense))
//                 props.history.push('/')
//             }}
//         />
//         <button onClick ={(e) => {
//             props.dispatch(removeExpense({ id: props.match.params.id }))
//             props.history.push('/')
//         }}>Remove</button>
//     </div>
// )

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => {
            return expense.id === props.match.params.id
        })
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        editExpense: (id, expense) => dispatch(editExpense(id, expense)),
        removeExpense: ({ id }) => dispatch(removeExpense(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage)