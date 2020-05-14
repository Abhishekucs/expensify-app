const getExpensesTotal = (expenses) => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue 
        return expenses.map((expense) => expense.amount).reduce(reducer,0)
}

export default getExpensesTotal