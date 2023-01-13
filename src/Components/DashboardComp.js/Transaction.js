import React from 'react'
import classes from './Transaction.module.css'
const Transaction = ({amount, status, type, date}) => {
   const style={
    width: "100%",
    borderCollapse : "collapse"
   }
   const tr={
    width:'100%',
    border:"1px solid blue"
   }
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
