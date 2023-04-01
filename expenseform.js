import React from 'react';

const expenseform=()=>{
    return (
        <form>
            <div>
                <lable>Expense Title</lable>
                <input type='text'/>
            </div>
            <div>
                <label>Expense amount</label>
                <input type='number'/>
            </div>
            <div>
                <label>Date</label>
                <input type='date'/>
            </div>
            <div>
                <button type='submit'>Add</button>
            </div>
        </form>
    )
}
export default expenseform;