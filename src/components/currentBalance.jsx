import React, { useContext } from 'react'
import { globalContext } from '../context/globalState'


function CurrentBalance() {
    const { transactions } = useContext(globalContext)
    let total = 0
    for(let i of transactions ) {
        total += i.amount
    }

    return (
        <>
            <h3 className="balance" > Your current balance is </h3>
            <h4 className="displayBalance"> ${ total } </h4>
        </>
    )
}

export default CurrentBalance
