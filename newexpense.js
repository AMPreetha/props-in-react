import React from 'react';
import ExpenseForm from './expenseform';
const NewExpense=()=>{
    const saveExpenseDataHandler=(enteredExpenseData)=>{
        const exp={
            ...enteredExpenseData,
            id:Math.random().toString()

        }

    }
    return(
        <div>
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}></ExpenseForm>
        </div>
    )
}
export default NewExpense;