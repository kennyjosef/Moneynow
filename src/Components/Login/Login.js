import React from 'react'
import Logo from '../Logo/Logo'
import {useFormik} from 'formik'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'
import classes from './Login.module.css'
import { loginSchema } from '../Schema/LoginSchema'
import axios from 'axios'

const Login = () => {
const formik= useFormik({
    initialValues:{
        email: "",
        password: "",
    },
    validationSchema:loginSchema,
    onSubmit: (values )=>{
        axios.post("https://moneynow.onrender.com/api/login", values)
        .then(res=>{ 
            console.log(res)
        })
        .catch(error=>{
            console.log(error.response)
        })
    }
})
console.log(formik.errors)
console.log("vaules", formik.values.email, formik.values.password)
  return (
    <div className={classes.container}>
      <div className={classes.item1}>
            <div className={classes.logo}>
                <Logo/>
            </div>
            <div className={classes.login}>
                <h3>Welcome Back!</h3>
                <p>To gain access into your account, you have to login</p>
            </div>
            <form action="" onClick={formik.handleSubmit}>
                <div>
                    <p className={classes.heading}> Email</p>
                    <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    placeholder='Type your e-mail' 
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    />
                    <p className={classes.error}>{formik.errors.email}</p>
                </div>
                <div>
                    <p className={classes.heading}>Password</p>
                    <input 
                    type="password" 
                    name="password" 
                    id="password" 
                    placeholder='Minimum of 8 characters' 
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    />
                    <p className={classes.error}>{formik.errors.password}</p>
                </div>
                <div className={classes.remember}>
                    <input type="checkbox" name="" id=""className={classes.check} />
                    <p>Remember me</p>
                </div>
                <div>
                    {/* <Link to="/dasboard"> */}
                        <Button   name="Proceed"/>
                    {/* </Link> */}
                </div>
            </form>
                <div className={classes.para}>
                    <Link to="/forgetpassword">
                        <p>Forget Password?</p>
                    </Link>
                    <p>New to MoneyNow? 
                        <Link to="signup">
                            <span> Sign Up</span> 
                        </Link>
                    </p>
                </div>

        </div>
        <div className={classes.item2}></div>
    </div>
  )
}

export default Login
