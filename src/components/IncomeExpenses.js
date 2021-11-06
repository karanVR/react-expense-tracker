import React from "react";
import { GlobalContext } from "../context/GlobalState";
import { useContext } from "react";

const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const Ptotal = transactions
    .filter((transaction) => transaction.amount > 0)
    .reduce((total, transaction) => total + transaction.amount, 0)


  const Ntotal = transactions
    .filter((transaction) => transaction.amount < 0)
    .reduce((total, transaction) => total + transaction.amount, 0)
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p id="money-plus" className="money plus">
          $+{Ptotal}
        </p>
      </div>
      <div>
        <h4>Expenses</h4>
        <p id="money-minus" className="money minus">
          ${Ntotal}
        </p>
      </div>
    </div>
  );
};

export default IncomeExpenses;
