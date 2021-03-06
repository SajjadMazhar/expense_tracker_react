import React, { useContext } from 'react'
import { GlobalContext } from '../contexts/GlobalState'

const Balance = () => {
    const {transactions} = useContext(GlobalContext)
    const total = transactions.map(transaction=>transaction.amount)
    .reduce((acc, currItem)=>(acc+=currItem), 0).toFixed(2);

  return (
    <>
      <h4>Your Balance</h4>
      <h1>${total}</h1>
    </>
  )
}

export default Balance
