import React from 'react'
import Button from '../Button/Button'
import Logo from '../Logo/Logo'
import { Link } from 'react-router-dom'
import classes from './Login.module.css'

const ForgetSucces = () => {
  return (
    <div className={classes.container}>
      <div className={classes.item1}>
            <div className={classes.logo}>
                <Logo/>
            </div>
            <div>
                <img src="" alt="successful" />
            </div>
            <div className={classes.login}>
                <h3>Password reset successful</h3>
                <p>You have successfully reset your password</p>
                <p>Kindly input your login details to access your account</p>
            </div>
            <div>
                <Link to="/">
                    <Button name="Log In"/>
                </Link>
            </div>
        </div>
        <div className={classes.item2}></div>

    </div>
  )
}

export default ForgetSucces
