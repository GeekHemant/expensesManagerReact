import React, { useContext } from "react";
import { globalContext } from "../context/globalState";


function IncomeExpense() {
  const { transactions } = useContext(globalContext);

  let income = 0
  let expense = 0
  for(let i of transactions ) {
    const temp = i.amount
    temp > 0 ? income += temp : expense += temp
    // income += temp
  }
  

  return (
    <div className="displayStatus" >
      <div className="incomeExpense" >
        <div> Income </div>
        <div className="green" > + ${ income } </div>
      </div>
      <div className="incomeExpense">
          <div> Expenses </div>
          <div className="red" > - ${ Math.abs(expense) } </div>
      </div>
    </div>
  );
}

export default IncomeExpense;
