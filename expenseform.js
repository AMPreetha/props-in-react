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
    console.log(exp);
    }
    return (
        <form onSubmit={submitChangeHandler}>
            <div>
                <lable>ExpenseTitle</lable>
                <input type='text' onChange={titleChangeHandler}/>
            </div>
            <div>
                <label>ExpenseAmount</label>
                <input type='number' onChange={amountChangeHandler}/>
            </div>
            <div>
                <label>Date</label>
                <input type='date' onChange={dateChangeHandler}/>
            </div>
            <div>
                <button type='submit'>Add</button>
            </div>
        </form>
    )
}
export default ExpenseForm;