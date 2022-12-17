import React from 'react'
import Logo from '../Logo/Logo'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'
import classes from './Login.module.css'

const Login = () => {
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
            <form action="">
                <div>
                    <p> Email</p>
                    <input type="email" name="email" id="email" placeholder='xyz@gmail.com' />
                </div>
                <div>
                    <p>Password</p>
                    <input type="password" name="password" id="password" placeholder='Minimum of 8 characters' />
                    <i class="fa fa-eye" aria-hidden="true"></i>
                </div>
                <div className={classes.remember}>
                    <input type="checkbox" name="" id="" />
                    <p>Remember me</p>
                </div>
                <div>
                    <Link to="/dasboard">
                        <Button name="Proceed"/>
                    </Link>
                </div>
            </form>
                <Link to="/forget/1">
                    <p>Forget Password?</p>
                </Link>
                <div className={classes.para}>
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
