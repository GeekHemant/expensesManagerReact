import React from "react";
import "./App.css";
import { Header } from "./components/header";
import { GlobalProvider } from "./context/globalState";
import CurrentBalance from "./components/currentBalance";
import IncomeExpense from "./components/incomeExpense";
import History from "./components/history";
import AddTransaction from "./components/addTransaction";

function App() {
  return (
    <>
      <GlobalProvider>
        
        <Header />
        <CurrentBalance />
        <IncomeExpense />
        <History />
        <AddTransaction />


      </GlobalProvider>
    </>
  );
}

export default App;
