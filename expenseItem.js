import React,{ useState } from 'react';
import './expense.css'
const ExpenseItem=((props)=>{
  const [money,setTitle]=useState(money)
  const clickHandler=()=>{
    setTitle('100')
    console.log('setTitle')
  }
    const exp = 'Food ';
    const petrol = "Petrol ";
    const movie = 'Movies ';
    const money='100';
    const mon='200';
    const mone='300'
    

    return (
      <div>
        <div className="expense-item">Expense Item</div>

        <div>
          <p className="food">
            {exp}
            <p1>{props.money}</p1>
            <button onClick={clickHandler}>Delete Expense</button>
          </p>
        </div>
        <div>
          <p className="petrol">
            {petrol}
            <p1>{mon}</p1>
            <button onClick={clickHandler}>Delete Expense</button>
          </p>
        </div>
        <div>
          <p className="movies">{movie}</p>
          <p1>{mone}</p1>
          <button onClick={clickHandler}>Delete Expense</button>
        </div>
        <button onClick={clickHandler}>Delete Expense</button>
      </div>
    );
});
export default ExpenseItem;