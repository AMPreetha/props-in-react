import './expense.css'
const ExpenseItem=((props)=>{
    const exp = 'Food Rs 10';
    const petrol = "Petrol Rs 100";
    const movie = 'Movies Rs 200';
    const loc='locationOfExpense';
    const date=props.date.toLocaleString('en-US',{day:'2-digit'})
    const month = props.date.toLocaleString('en-US', { month: "long" });
    const year = props.date.getFullYear

    return (
      <div>
        <div>
          <h1 className="expense-item">Expense Item</h1>
        </div>
        <div>
          <p>{date}</p>
          <p>{month}</p>
          <p>{year}</p>
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
      </div>
    );
});
export default ExpenseItem;