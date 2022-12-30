import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../Button/Button'
import Logo from '../Logo/Logo'
import Logo5 from '../../Assets/details.png'
import classes from './Password.module.css'
import axios from 'axios'
import {Formik, Form} from "formik"
import TextField from '../Login/TextField'
import * as Yup from "yup"
const Password = () => {
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
        password: "",
        confirmPassword: ""
      }}
      validationSchema={validate}
      onSubmit={values=>{
        console.log(values)
        axios.put(`https://moneynow.onrender.com/api/passwordSignUp?id=${ localStorage.getItem("id")}`, values)
         .then(res=>{
          console.log(res)
          navigate('/bvn')
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
              <h3>Create Password</h3>
              <p>Add Security to Your Account</p>
              <div className={classes.forform}>
                <Form className={classes.form}>
                  {console.log("values", formik.values)}
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
          </div>
        )}
      </Formik>
      <div className={classes.item2}>
        <img src={Logo5} alt="password"/>
      </div>
    </div>
  )
}

export default Password
