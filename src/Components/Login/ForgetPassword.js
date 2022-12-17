 import React from 'react' 
 import Logo from '../Logo/Logo'
import { Link } from 'react-router-dom'
 import Button from '../Button/Button'
 import classes from './ForgetPassword.module.css'
 
 const ForgetPassword = () => {
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
            <form action="">
                <div>
                    <p> Email</p>
                    <input type="email" name="email" id="email" placeholder='xyz@gmail.com' />
                </div>
                <div>
                    <Link to="/forget/2">
                        <Button name="Reset"/>
                    </Link>
                </div>
            </form>

        </div>
        <div className={classes.item2}></div>
       
     </div>
   )
 }
 
 export default ForgetPassword
 