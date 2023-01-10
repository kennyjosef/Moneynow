import React from 'react'
import classes from './Flutter.module.css'
import Nav from './Nav'
const FlutterPay = () => {
  return (
    <div>
        <Nav/>
        <div className={classes.payContainer}>
            <h4>Kindly link  below to make payment</h4>
            <a href={localStorage.getItem("link")}>PAY NOW</a>
        </div>
    </div>
  )
}

export default FlutterPay