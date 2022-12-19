import React from 'react'
import Logo from '../Logo/Logo'
import {useFormik} from 'formik'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'
import classes from './Login.module.css'
import { loginSchema } from '../Schema/LoginSchema'


const onSubmit=()=>{
    console.log("submit")
}
const Login = () => {
    // let apiKey="639b9e5ce2ea19656ef00cf9"
    // let baseURL="https://moneynow.onrender.com/api/login"
    // useEffect(()=>{
    //     let fetchLoginApi = async ()=>{
    //         let res = await fetch(`${baseURL}?id=${apiKey}`)
    //         let data= await res.json()
    //         data
            
    //     }

    //     fetchLoginApi()
    // })
   const {values, errors, handleBlur, handleChange, handleSubmit,} = useFormik({
        initialValues:{
            email:"",
            password: "",
        },
        validationSchema:loginSchema,
        onSubmit
        });
        console.log(errors)
        console.log("data", values.email, values.password)
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
            <form action=""onSubmit= {handleSubmit}>
                <div>
                    <p> Email</p>
                    <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.email?"input-error":""}
                    placeholder='xyz@gmail.com' 
                    />
                    <p className={classes.error}>{errors.email}</p>
                </div>
                <div>
                    <p>Password</p>
                    <input 
                    type="password" 
                    name="password" 
                    id="password" 
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.password?"input-error":""}
                    placeholder='Minimum of 8 characters' />
                    <p className={classes.error}>{errors.password}</p>
                </div>
                <div className={classes.remember}>
                    <input type="checkbox" name="" id="" />
                    <p>Remember me</p>
                </div>
                <div>
                    {/* <Link to="/dasboard"> */}
                        <Button name="Proceed"/>
                    {/* </Link> */}
                </div>
            </form>
                <div className={classes.para}>
                    <Link to="/forget/1">
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
