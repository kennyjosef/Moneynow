import React, { useState } from 'react'
import Logo from '../Logo/Logo'
import Logo4 from '../../Assets/verify.png'
import classes from './ForgetPwrdVerify.module.css'
import Button from '../Button/Button'
// import classes from "../SignUp/SignUp1.module.css"
const ForgetPwrdVerify = () => {
    const[otp, setOtp]=useState(new Array(4).fill(""))
    const handleChange=(element, index)=>{
        if(isNaN(element.value))return false;
        setOtp([...otp.map((d, idx)=>(idx===index)? element.value:d)]);
        if(element.nextSibling){
            element.nextSibling.focus();
        }
    }
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
                <form action="" className={classes.otpSpan}>
                    <div>
                        {
                            otp.map((data, index)=>{
                                return(
                                    <input 
                                    type="text" 
                                    name="otp" 
                                    maxLength="1" 
                                    key={index}
                                    value={data}
                                    onChange={e=>{handleChange(e.target, index)}}
                                    onFocus={e=>e.target.select()}
                                    />
                                    )
                                })
                            }
                    </div>
                        <Button name="Verify"/>
                </form>
            </div>
            <div>
                <p>Didn’t receive code? Resend code</p>
            </div>
        </div>
        <div className={classes.item2}>
            <img src={Logo4} alt="" />
        </div>
    </div>
  )
}

export default ForgetPwrdVerify