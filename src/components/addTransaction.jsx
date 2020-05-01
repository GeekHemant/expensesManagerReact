import React, { useContext, useState } from 'react'
import { globalContext } from '../context/globalState'


function AddTransaction() {
    const { transactions, handleNew } = useContext(globalContext)

    const [topic, setText] = useState('')
    const [amount, setAmount] = useState(0)

    const handleSubmit = e => {
        e.preventDefault()
        const newTransaction = {
            id: 10,
            topic,
            amount: +amount
        }
        // console.log(typeof(amount))
        handleNew( newTransaction )
    }

    return (
        <div className="addTransaction" >
            <h1> Add new transaction </h1>

            <form onSubmit={(e) => handleSubmit(e) } >
                <label> Text </label>
                <input type="text" value={topic} onChange={(e) => setText(e.target.value)} />

                <label> amount </label>
                <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
                
                <button> Submit </button>
            </form>

        </div>
    )
}


export default AddTransaction


