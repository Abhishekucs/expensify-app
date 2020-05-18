import React from 'react'
import moment from 'moment'
import 'react-dates/initialize'
import { SingleDatePicker } from 'react-dates'

export default class ExpenseForm extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? props.expense.amount.toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calenderFocused:false,
            error: ''
        }
    }
    onAmountChange = (e) => {
        const amount = e.target.value
        if(!amount || amount.match(/^\d*(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }))
        }
    }
    onDateChange = (createdAt) => {
        if(createdAt) {
            this.setState(() => ({ createdAt }))
        }
    }
    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calenderFocused: focused }))
    }
    onSubmit = (e) => {
        e.preventDefault()

        if(!this.state.description || !this.state.amount) {
            this.setState(() => ({ error: 'Please provide description and amount' }))
        }else {
            this.setState(() => ({ error: '' }))
            this.props.onSubmit(
                {
                    description: this.state.description,
                    amount: parseFloat(this.state.amount),
                    note: this.state.note,
                    createdAt: this.state.createdAt.valueOf()
                }
            )
        }
    }
    render() {
        return (
                <form className="form" onSubmit={this.onSubmit}>
                {this.state.error && <p className="form__error">{this.state.error}</p>}
                    <input 
                        type="text"
                        className="text-input"
                        placeholder="Description"
                        autoFocus={true}
                        value = {this.state.description}
                        onChange = {(e) => {
                            const description = e.target.value
                            this.setState(() => ({ description }))
                        }}
                    />
                    <input 
                        type="text"
                        className="text-input"
                        placeholder="Amount"
                        value = {this.state.amount}
                        onChange = {this.onAmountChange}
                    />
                    <SingleDatePicker 
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calenderFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                    <textarea
                        placeholder="Add note(optionally)"
                        className="textarea"
                        value = {this.state.note}
                        onChange = {(e) => {
                            const note = e.target.value
                            this.setState(() => ({ note }))
                        }}
                    >
                    </textarea>
                    <div>
                        <button className="button">Save Expense</button>
                    </div>
                </form>
        )
    }
}