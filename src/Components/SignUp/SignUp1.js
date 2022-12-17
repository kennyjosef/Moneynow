import React from 'react'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'
import classes from './SignUp1.module.css'
import Logo from '../Logo/Logo'

const SignUp1 = () => {
   
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
                <form action="">
                    <p>Email</p>
                    <input type="email" name="email" id="email" placeholder='xzy@gmail.com' />
                </form>
                <div className={classes.para}>
                    <Link to="/verify">
                        <Button name="Proceed"/>
                    </Link>
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