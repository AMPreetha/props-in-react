import './expense.css'
const ExpenseItem=(()=>{
  const clickHandler=()=>{
    console.log('clicked')
  }
    const exp = 'Food Rs 10';
    const petrol = "Petrol Rs 100";
    const movie = 'Movies Rs 200';
    const loc='locationOfExpense';
    

    return (
      <div>
        <div>
          <h1 className="expense-item">Expense Item</h1>
        </div>
        
        <div>
          <p className="food">{exp}</p>
        </div>
        <div>
          <p className="petrol">{petrol}</p>
        </div>
        <div>
          <p className="movies">{movie}</p>
          <p>{loc}</p>
        </div>
        <button onClick={clickHandler}>Delete Expense</button>
      </div>
    );
});
export default ExpenseItem;