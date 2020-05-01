import React, { useContext } from "react";
import { globalContext } from "../context/globalState";
import ParticularTransaction from "./particularTransaction";

function History() {
  const { transactions } = useContext(globalContext);

  return (
    <>
      <h1 className="history"> History </h1>
      {transactions.map((transaction) => (
        <ParticularTransaction transaction={transaction} />
      ))}
    </>
  );
}

export default History;
