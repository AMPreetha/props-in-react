import NewExpense from "./components/expense/newexpense";
import ExpenseItem from "./components/expenseItem";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NewExpense></NewExpense>
        <ExpenseItem></ExpenseItem>
      </header>
    </div>
  );
}

export default App;
