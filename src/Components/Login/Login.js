import React from 'react'
import Logo from '../Logo/Logo'
import {Formik, Form} from 'formik'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'
import classes from './Login.module.css'
import { useNavigate } from 'react-router-dom'
import * as Yup from "yup"
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import TextField from './TextField'
const Login = () => {
  const navigate = useNavigate()
    const validate= Yup.object({
        email:Yup
        .string()
        .email("Please enter valid email")
        .required("Email is required"),
        password:Yup
        .string()
        .min(8)
        .required("Password is required"),
    })
  return (
    <div className={classes.container}>
        <Formik
        initialValues={{
            email:"",
            password:""
        }}
        validationSchema={validate}
        onSubmit={values=>{
            console.log(values)
            axios.post("https://moneynow.onrender.com/api/login", values)
            .then(response=>{ 
                 if(response.data){
                    navigate("/dashboard")
                 }
             })
             .catch(error=>{
                toast.error('Invalid Credentials')
                console.log(error.response)
                console.log(error.response.data)
                console.log(error.message)
             })
        }}
        >
            {formik=>(
                <div className={classes.item1}>
                    <div className={classes.logo}>
                        <Logo/>
                    </div>
                    <div className={classes.login}>
                        <h3>Welcome Back!</h3>
                        <p>To gain access into your account, you have to login</p>
                    </div>
                    <div className={classes.forform}>
                        <Form className={classes.form}>
                            <div>
                                <TextField label="Email" name="email" placeholder="Type your e-mail" type="text"/>
                            </div>
                            <div>
                                <TextField label="Password" name="password" placeholder="Minimum of 8 characters" type="password"/>
                            </div>
                            <div className={classes.remember}>
                                <input type="checkbox" name="" id=""className={classes.check} />
                            <p>Remember me</p>
                            </div>
                            <div>
                                <Button name="Proceed"/>
                            </div>
                        </Form>
                        <div className={classes.para}>
                            <Link to="/forgetpassword">
                            <p className={classes.link}>Forgot Password?</p>
                            </Link>
                        </div>
                        <p>New to MoneyNow?
                            <Link to="/signup">
                            <span className={classes.link}>Sign Up</span>
                            </Link>
                        </p>
                    </div>
                </div>
            )}

        </Formik>
        <div className={classes.item2}></div>

    </div>
  )
}

export default Login
