import React from 'react'
import { GlobalContext } from "../context/GlobalState";
import { useContext } from "react";

const Balance = () => {
    const { transactions } = useContext(GlobalContext);
    return (
        <div>
            <h4>Your balance</h4>
            <h1 id="balance">${transactions.reduce((total, transaction) => total+transaction.amount,0)}</h1>
        </div>
    )
}

export default Balance
