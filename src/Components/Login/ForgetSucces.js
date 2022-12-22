import React from 'react'
import Button from '../Button/Button'
import Logo from '../Logo/Logo'
import Logo2 from '../../Assets/mark.jpg'
import Logo3 from '../../Assets/success.png'
import { Link } from 'react-router-dom'
import classes from './ForgetSucc.module.css'

const ForgetSucces = () => {
  return (
    <div className={classes.container}>
      <div className={classes.item1}>
            <div className={classes.logo}>
                <Logo/>
            </div>
            <div className={classes.mark}>
                <img src={Logo2} alt="successful" />
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
        <div className={classes.item2}>
            <img src={Logo3} alt="done" />
        </div>

    </div>
  )
}

export default ForgetSucces
