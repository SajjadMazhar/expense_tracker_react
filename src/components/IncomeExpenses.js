import React, { useContext } from 'react'
import { GlobalContext } from '../contexts/GlobalState'

const IncomeExpenses = () => {
    const {transactions} = useContext(GlobalContext)
    const amounts = transactions.map(transaction => transaction.amount)
    const income = amounts.filter(amnt=>amnt>0).reduce((acc, currItem)=>(acc+=currItem), 0).toFixed(2)

    const expense = (
        amounts.filter(amnt=>amnt<0).reduce((acc, currItem)=>(acc+=currItem), 0)*-1
    ).toFixed(2);
  return (
    <div className='inc-exp-container'>
        <div>
            <h4>Income</h4>
            <p id='money-plus' className='money plus'>{income}</p>
        </div>
        <div>
            <h4>Expenses</h4>
            <p id='money-minus' className='money minus'>{expense}</p>
        </div>
    </div>
  )
}

export default IncomeExpenses
