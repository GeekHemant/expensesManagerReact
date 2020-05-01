import React, { useContext } from 'react'
import { globalContext } from '../context/globalState'


function ParticularTransaction({ transaction }) {
    const { handleDelete } = useContext(globalContext)
    let sign = "transaction"
    sign += transaction.amount < 0 ? " red" : " green"
    return (
        <>
            <li className={sign} >
                {transaction.topic}  ${transaction.amount}
                <button className="deleteButton" onClick={ () => handleDelete( transaction.id ) } > Delete </button>
            </li>

        </>
    )
}

export default ParticularTransaction
