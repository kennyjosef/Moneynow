import React from 'react'
import Logo from '../Logo/Logo'
import classes from './Verify.module.css'

const Verify = () => {
  return (
    <div className={classes.container}>
        <div className={classes.item1}>
            <div className={classes.logo}>
                <Logo/>
            </div>
            <div className={classes.login}>
                <h3>Verify E-mail</h3>
                <p>Enter OTP sent to xyz@gmail.com</p>
            </div>
            <div className={classes.otp}>
                <p>Enter OTP</p>
                <div className={classes.otpSpan}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div>
                <p>Didn’t receive code? Resend code</p>
            </div>
        </div>
        <div className={classes.item2}>
        </div>
      
    </div>
  )
}

export default Verify
