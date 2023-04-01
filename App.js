import ExpenseItem from "./components/expenseItem";

import "./App.css";
  

function App() {
  const exp=[{loc:'locationOfExpense'}]
  for(let i=0;i<100;i++){
      return exp;
  }
  return (
    <div className="App">
      <header className="App-header">
        <ExpenseItem loc={exp[0]}></ExpenseItem>
      </header>
    </div>
  );
}

export default App;
