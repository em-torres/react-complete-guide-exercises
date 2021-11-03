import ExpenseItem from "./ExpenseItem";
import '../css/Expenses.css';

function DisplayExpenses(expenses) {
    return (
        <div className="expenses">
            {expenses.expenseObject.map(expense => (
                <ExpenseItem key={expense.id} {...expense} />
            ))}
        </div>
    )    
}

export default DisplayExpenses;