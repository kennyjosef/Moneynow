import React from 'react'
import Logo from '../Logo/Logo'
import classes from './Details.module.css'
import  './Details.module.css'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'

const Details = () => {
  return (
    <div className={classes.container}>
        <div className={classes.item1}>
            <div className={classes.logo}>
                <Logo/>
            </div>
            <div className={classes.login}>
                <h3>Enter Name</h3>
                <p>Kindly Provide Your Name </p>
            </div>
            <form action="" className={classes.details}>
                <div>
                    <p> FisrtName</p>
                    <input 
                    type="text" 
                    name="firstName" 
                    id="firstName" 
                    placeholder='Enter your First Name' />
                </div>
                <div>
                    <p>Last Name</p>
                    <input 
                    type="text" 
                    name="lastName" 
                    id="lastName" 
                    placeholder='Enter your Last Name'/>
                </div>
                <div>
                    <p>Phone Number</p>
                    <input 
                    type="tel" 
                    name="tel" 
                    id="tel" />
                </div>
                <div>
                    <p>Referral ID (Optional)</p>
                    <input 
                    type="text" 
                    name="referral" id="referral" 
                    placeholder='jw34r' />
                </div>
                <div>
                    <Link to="/password">
                        <Button name="Proceed"/>
                    </Link>
                </div>
            </form>

        </div>
        <div className={classes.item2}></div>
    </div>
  )
}

export default Details
