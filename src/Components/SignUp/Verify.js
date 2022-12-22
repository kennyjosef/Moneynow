import React, {useState} from 'react'
import Logo from '../Logo/Logo'
import Logo4 from '../../Assets/verify.png'
import classes from './Verify.module.css'
import Button from '../Button/Button'
import axios from 'axios'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'

const Verify = () => {
    const navigate= useNavigate()
    const[otp, setOtp]=useState(new Array(4).fill(""))
    const handleChange=(element, index)=>{
        if(isNaN(element.value))return false;
        // console.log(element.value)
        setOtp([...otp.map((d, idx)=>(idx===index)? element.value:d)]);
        if(element.nextSibling){
            element.nextSibling.focus();
        }
    }
    
    const handleSubmit =(e)=>{
        e.preventDefault()
        axios.post('https://moneynow.onrender.com/api/otp', {otp: otp.join("")})
        .then(response=>{
            console.log(response)
            if(!response){
                return alert("Invalid OTP provided")
            }else{
                navigate('/details')
            }
        })
        .catch(error=>{
            console.log(error.message)
            alert(error.response.data.message)

        })
    }
    console.log("otp is", otp.join(""))
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

export default Verify
