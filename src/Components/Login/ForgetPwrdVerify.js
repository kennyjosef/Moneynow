import React, { useState } from 'react'
import Logo from '../Logo/Logo'
import Logo4 from '../../Assets/verify.png'
import classes from './ForgetPwrdVerify.module.css'
import Button from '../Button/Button'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const ForgetPwrdVerify = () => {
    const navigate= useNavigate()
    const[otp, setOtp]=useState(new Array(4).fill(""))
    const handleChange=(element, index)=>{
        if(isNaN(element.value))return false;
        setOtp([...otp.map((d, idx)=>(idx===index)? element.value:d)]);
        if(element.nextSibling){
            element.nextSibling.focus();
        }
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post('https://moneynow.onrender.com/api/otp', {otp:otp.join("")})
        .then(response=>{
            console.log(response)
            localStorage.setItem('userId', response.data.checkExistingUser._id)
            localStorage.getItem("userId")
                navigate('/createnew')
        })
        .catch(error=>{
            toast.error("Invalid OTP provided")
            console.log(error)
            console.log(error.message)
        })
    }
    console.log("otp is", otp.join(""))
    const userIDnumber = localStorage.getItem("userId")
    console.log(userIDnumber)

  return (
    <div className={classes.container}>
        <div className={classes.item1}>
            <div className={classes.logo}>
                <Logo/>
            </div>
            <div className={classes.login}>
                <h3>Verify E-mail</h3>
                <p>Enter OTP sent to <span>{localStorage.getItem('userEmail')}</span></p>
            </div>
            <div className={classes.otp}>
                <p>Enter OTP</p>
                <form action="" onSubmit={handleSubmit}className={classes.otpSpan}>
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
            <div className={classes.resend}>
                <p>Didn’t receive code? <span>Resend code</span></p>
            </div>
        </div>
        <div className={classes.item2}>
            <img src={Logo4} alt="" />
        </div>
    </div>
  )
}

export default ForgetPwrdVerify