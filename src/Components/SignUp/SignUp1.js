import React,{ useState } from 'react'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'
import classes from './SignUp1.module.css'
import Logo from '../Logo/Logo'

const SignUp1 = () => {
    const [email, setEmail]= useState("")
    const [message, setMessage]= useState("")

    function handleEmail(e){
        setEmail(e.target.value)
    }
    const validateEmail =(e)=>{
        e.preventDefault()
        const regExp= /^[a-zA-Z0-9._]+@[a-z]+\.[a-z]{2,6}$/
        if(regExp.test(email)){
            setMessage("")
        }else if (email===""){
            setMessage("Please enter your email")
        }else if(!regExp.test(email)){
            setMessage("Email is not valid")
        }else{
            setMessage("")
        }
    }
   
  return (
    <div className={classes.container}>
        <div className={classes.item1}>
            <div className={classes.logo}>
                <Logo/>
            </div>
            <div>
                <div className={classes.login}>
                    <h3>Welcome Back!</h3>
                    <p>To create an account, enter your e-mail</p>
                </div>
                <form action="" onSubmit={validateEmail}>
                    <p>Email</p>
                    <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    value={email}
                    onChange={handleEmail}
                    placeholder='xzy@gmail.com' />
                    <p className={classes.error}>{message}</p>
                    {/* <Link to="/verify"> */}
                        <Button name="Proceed"/>
                    {/* </Link> */}
                </form>
                <div className={classes.para}>
                    <p>Already have an account? 
                        <Link to="/">
                            <span> Sign In</span> 
                        </Link>
                    </p>

                </div>
            </div>

        </div>
        <div className={classes.item2}>

        </div>
    </div>
    

  )
}

export default SignUp1