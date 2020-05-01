import React, { useReducer } from "react";
import reducer from "./reducer";

const initialState = {
  transactions: [
    { id: 1, topic: "bakery", amount: 100 },
    { id: 2, topic: "biscuit", amount: -50 },
  ],
};

export const globalContext = React.createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleDelete = id => {
    dispatch({ type: "DELETE_TRANSACTION", id: id })
  }

  const handleNew = newTransaction => {
    dispatch({ type: "ADD_TRANSACTION", newTransaction: newTransaction })
  }

  return (
    <globalContext.Provider
      value={{
        transactions: state.transactions,
        handleDelete,
        handleNew,
      }}>
      {children}
    </globalContext.Provider>
  );
};
