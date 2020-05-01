
const id = 5
export default  ( state, action ) => {
    switch( action.type ) {
        case "DELETE_TRANSACTION": return {
            ...state,
            transactions: state.transactions.filter(transaction => transaction.id !== action.id )
        }
        case "ADD_TRANSACTION": return {
            ...state, 
            transactions: [
                action.newTransaction,
                ...state.transactions,
            ]
        }
        default:
            return state
    }

}