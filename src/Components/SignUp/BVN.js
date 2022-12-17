import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import Logo from '../Logo/Logo'
import classes from './BVN.module.css'

const BVN = () => {
  return (
    <div className={classes.container}>
        <div className={classes.item1} >
            <div>
                <Logo/>
            </div>
            <div className={classes.login}>
                <h3>BVN</h3>
                <p>Kindly Provide Your Bank Verification Number</p>
            </div>
            <form action="">
                <div>
                    <p>Enter your Bank Verification Number</p>
                    <input type="number" name="bvn" id="bvn" />
                    <p className={classes.dial}>Dial *565*0# on your mobile phone to get your BVN</p>
                </div>
                <div>
                    <Link to="/">
                        <Button name="Proceed"/>
                    </Link>
                </div>
            </form>

        </div>
        <div className={classes.item2}></div>
      
    </div>
  )
}

export default BVN
