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
    return (
        <form>
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