import React from 'react'
import classes from './Transaction.module.css'
const Transaction = ({amount, status, type, date}) => {
 
  return (
    <div className={classes.father}>
          <p>{type}</p>
          <p>{amount}</p>
          <p>{date}</p>
          <p>{status}</p>
    </div>
  )
}

export default Transaction
