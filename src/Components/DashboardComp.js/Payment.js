import React from 'react'
import Nav from './Nav'
import SideBar from './Sidebar'
import classes from './Payment.module.css'

const Payment = () => {
  return (
    <div>
        <Nav/>
        <div className={classes.containers}>
            <SideBar/>
            <div className={classes.main}>
              <h3>Pay now</h3>
              <h3>Pay now</h3>
              <h3>Pay now</h3>
              <h3>Pay now</h3>
              <h3>Pay now</h3>
            </div>
            
            
        </div>
    </div>
  )
}

export default Payment