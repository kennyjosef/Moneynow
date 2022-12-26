import React, {useState} from 'react'
import Logo from '../Logo/Logo'
import Logo4 from '../../Assets/verify.png'
import classes from './Verify.module.css'
import Button from '../Button/Button'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Verify = () => {
    const navigate= useNavigate()
    const[otp, setOtp]=useState(new Array(4).fill(""))
    const handleChange=(element, index)=>{
        if(isNaN(element.value))return false;
        setOtp([...otp.map((d, idx)=>(idx===index)? element.value:d)]);
        if(element.nextSibling){
            element.nextSibling.focus();
        }
    }
     
    const handleSubmit =(e)=>{
        e.preventDefault()
        axios.post('https://moneynow.onrender.com/api/otp', {otp: otp.join("")})
        .then(response=>{
            localStorage.setItem( "id", response.data.checkExistingUser._id)
            console.log(response)
            // if(!response){
                // toast.response('Invalid OTP provided')
                // return alert("Invalid OTP provided")
            // }else{
                navigate('/details')
            // }
        })
        .catch(error=>{
            toast.error("Invalid OTP provided")
            console.log(error.message)
        })
    }
    console.log("otp is", otp.join(""))
    
    localStorage.getItem("id")
    const result=localStorage.getItem("id")
    console.log(result)
    return (
    <div className={classes.container}>
        <div className={classes.item1}>
            <div className={classes.logo}>
                <Logo/>
            </div>
            <div className={classes.login}>
                <h3>Verify E-mail</h3>
                <p>Enter OTP sent to <span>{localStorage.getItem("email")}</span></p>
            </div>
            <div className={classes.otp}>
                <p>Enter OTP</p>
                <form action=""  onSubmit={handleSubmit}className={classes.otpSpan} >
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

export default Verify
