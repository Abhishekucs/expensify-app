import React from 'react'
import { connect } from 'react-redux'
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters'
import 'react-dates/initialize'
import { DateRangePicker } from 'react-dates'

export class ExpenseListFilters extends React.Component {
    state = {
        focusedInput: null
    }
    onDatesChange = ({ startDate, endDate }) => {
        this.props.setStartDate(startDate)
        this.props.setEndDate(endDate)
    }
    onFocusChange = (focusedInput) => {
        this.setState(() => ({ focusedInput }))
    }
    onTextChange = (e) => {
        const value = e.target.value
        this.props.setTextFilter({ text: value })
    }
    onSortChange = (e) => {
        if(e.target.value === 'amount'){
            this.props.sortByAmount()
        } else {
            this.props.sortByDate()
        }
    }
    render() {
        return (
            <div className="content-container">
                <div className="input-group">
                    <div className="input-group__item">
                        <input className="text-input" type="text" placeholder="Search Expenses" value={this.props.filters.text} onChange={this.onTextChange} />
                    </div>
                    <div className="input-group__item">
                        <select className="select" value={this.props.filters.sortBy} onChange={this.onSortChange}>
                            <option value="date">Date</option>
                            <option value="amount">Amount</option>
                        </select>
                    </div>
                    <div className="input-group__item">
                        <DateRangePicker 
                            startDate = {this.props.filters.startDate}
                            startDateId = "myStartDateId"
                            endDate = {this.props.filters.endDate}
                            endDateId = "myEndDateId"
                            onDatesChange = {this.onDatesChange}
                            focusedInput = {this.state.focusedInput}
                            onFocusChange = {this.onFocusChange}
                            numberOfMonths = {1}
                            isOutsideRange = {() => false}
                            showClearDates = {true}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setTextFilter: ({text}) => dispatch(setTextFilter({text})),
        setStartDate: (startDate) => dispatch(setStartDate(startDate)),
        setEndDate: (endDate) => dispatch(setEndDate(endDate)),
        sortByAmount: () => dispatch(sortByAmount()),
        sortByDate: () => dispatch(sortByDate())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters)