import React ,{useState} from 'react';

const ExpenseForm=()=>{
    const [enteredExpenseTitle,setEnteredExpenseTitle]=useState('');
    const [enteredExpenseAmount, setEnteredExpenseAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const titleChangeHandler=(event)=>{
        setEnteredExpenseTitle(event.target.value);
    }
    const amountChangeHandler = (event) => {
      setEnteredExpenseAmount(event.target.value);
    };
    const dateChangeHandler = (event) => {
      setEnteredDate(event.target.value);
    };
    const submitChangeHandler=(event)=>{
        event.preventDefault();
        const exp={
        ExpenseTitle:enteredExpenseTitle,
        ExpenseAmount:enteredExpenseAmount,
        Date:new Date(enteredDate)
    }
    console.log(exp)
    setEnteredExpenseTitle('');
    setEnteredExpenseAmount('');
    setEnteredDate('');
    }
    return (
        <form onSubmit={submitChangeHandler}>
            <div>
                <lable>ExpenseTitle</lable>
                <input type='text' value={enteredExpenseTitle} onChange={titleChangeHandler}/>
            </div>
            <div>
                <label>ExpenseAmount</label>
                <input type='number' value={enteredExpenseAmount} onChange={amountChangeHandler}/>
            </div>
            <div>
                <label>Date</label>
                <input type='date' value={enteredDate} onChange={dateChangeHandler}/>
            </div>
            <div>
                <button type='submit'>Add</button>
            </div>
        </form>
    )
}
export default ExpenseForm;