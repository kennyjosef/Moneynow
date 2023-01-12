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
import {toast } from 'react-toastify';
import { Icon } from 'react-icons-kit'
import {eye} from 'react-icons-kit/ionicons/eye'
import {eyeDisabled} from 'react-icons-kit/ionicons/eyeDisabled'

const NewPassword = () => {
  const [type, setType]= useState("password")
  const [icon, setIcon]= useState(eyeDisabled)
  const [types, setTypes]= useState("password")
  const [icons, setIcons]= useState(eyeDisabled)
  const [loading, setLoading] = useState(false)
  const style ={
    backgroundColor:"rgb(237, 162, 237)",

}
  const navigate = useNavigate()
  const validate= Yup.object({
    password: Yup.string()
    .min(8, "Password must be at least 8 character")
    .required("Password is required"),
    confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], "Password must match")
    .required("Confirm pasword is required")
  })
  const handleToggle=()=>{
    if(type==="password"){
        setIcon(eye);
        setType("text")
    }
    else{
      setIcon(eyeDisabled)
      setType("password")  
    }
}
const handleToggles=()=>{
  if(types==="password"){
      setIcons(eye);
      setTypes("text")
  }
  else{
    setIcons(eyeDisabled)
    setTypes("password")  
  }
}
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
        setLoading(true)
        axios.put(`https://moneynow.onrender.com/api/resetpassword?id=${localStorage.getItem('userId')}`, values)
        .then(res=>{
         console.log(res)
         setLoading(false)
         navigate('/passwordset')
        })
       .catch(error=>{
         console.log(error.message)
         if(error.message=== "Network Error"){
          toast.error("Network Issues, check your connection")
       }else{
           toast.error('Invalid Credentials')
       }
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
              <div className={classes.eyeDisabled}>
                <TextField label="Password" name="password"  type={types} placeholder="Minimum of 8 Characters"/>
                <span onClick={handleToggles}><Icon icon={icons}  /></span>
              </div>
              <div className={classes.eyeDisabled}>
                <TextField label="Confirm Password" name="confirmPassword" type={type} placeholder="Confirm your password"/>
                <span onClick={handleToggle}><Icon icon={icon}  /></span>
              </div>
              <div>
                {
                  loading ?
                  <Button style={style} name="Loading"/>
                  :
                  <Button name="Proceed"/>
                }
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
