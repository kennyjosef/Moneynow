import { useFormik} from 'formik'
import React, { useState } from 'react' 
 import Logo from '../Logo/Logo'
 import Button from '../Button/Button'
 import classes from './ForgetPassword.module.css'
import { basicSchema } from '../Schema/Schema'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const ForgetPassword = () => {
    const navigate = useNavigate()
    const {values, errors, handleBlur, handleChange, handleSubmit,} = useFormik({
        initialValues:{
            email:""
        },
        validationSchema: basicSchema,
        onSubmit:(values)=>{
            axios.put('https://moneynow.onrender.com/api/forgotpassword', values)
            .then(res=>{
                console.log(res)
                navigate('/passwordverify')
            })
            .catch(error=>{
                console.log(error.message)
            })
        }
    });
    console.log(errors);

   return (
     <div className={classes.container}>
        <div className={classes.item1}>
            <div className={classes.logo}>
                <Logo/>
            </div>
            <div className={classes.login}>
                <h3>Forgot Password</h3>
                <p>Reset Password to gain access to your account</p>
            </div>
            <form action="" onSubmit={handleSubmit} className={classes.form}>
                <div>
                    <p className={classes.heading}> Email</p>
                    <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder='xyz@gmail.com' />
                    <p className={classes.error}>{errors.email}</p>
                    
                </div>
                <div>
                        <Button name="Reset"/>
                </div>
            </form>

        </div>
        <div className={classes.item2}></div>
       
     </div>
   )
 }
 
 export default ForgetPassword
 