import React, { useState, useEffect } from 'react'
import Button from '../Button/Button'
import Logo from '../Logo/Logo'
import Logo4 from '../../Assets/details.png'
import classes from './NewPassword.module.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import {Formik, Form} from "formik"
import TextField from './TextField'
import * as Yup from "yup"
const NewPassword = () => {
  const navigate = useNavigate()
  const validate= Yup.object({
    password: Yup.string()
    .min(8, "Password must be at least 8 character")
    .required("Password is required"),
    confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], "Password must match")
    .required("Confirm pasword is required")
  })
  return (
    <div className={classes.container}>
      <Formik 
      initialValues={{
        password:"",
        confirmPassword:""
      }}
      validationSchema={validate}
      onSubmit={values=>{
        console.log(values)
        axios.put(`https://moneynow.onrender.com/api/resetpassword?id=${localStorage.getItem('userId')}`, values)
        .then(res=>{
         console.log(res)
         navigate('/passwordset')
        })
       .catch(error=>{
         console.log(error)
       })
      }}
      >
        {formik=>(

          <div className={classes.item1}>
             <div>
                <Logo/>
            </div>
            <div className={classes.login}>
              <h3>Create New Password</h3>
              <p>Kindly Create a New Password for Your Account</p>
            </div>
            <div className={classes.forform}>
              <Form className={classes.form}>
              {console.log("Values", formik.values)}
              <div>
                <TextField label="Password" name="password"  type="password" placeholder="Minimum of 8 Characters"/>
              </div>
              <div>
                <TextField label="Confirm Password" name="confirmPassword" type="password" placeholder="Confirm your password"/>
              </div>
              <div>
                <Button name="Proceed"/>
              </div>
              </Form>
            </div>
          </div>
        )}
      </Formik>
      <div className={classes.item2}>
        <img src={Logo4} alt="details" />
      </div>
    </div>
  )
}

export default NewPassword
