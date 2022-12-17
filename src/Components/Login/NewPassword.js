import React from 'react'
import Button from '../Button/Button'
import Logo from '../Logo/Logo'
import { Link } from 'react-router-dom'
import classes from '../SignUp/Password.module.css'

const NewPassword = () => {
  return (
    <div className={classes.container}>
       <div className={classes.item1}>
        <div>
            <Logo/>
        </div>
        <div className={classes.login}>
          <h3>Create New Password</h3>
          <p>Kindly Create a New Password for Your Account</p>
        </div>
        <form action="">
          <div>
            <p>Password</p>
            <input type="password" name="password" id="password" placeholder='Minimum of 8 characters'/>
          </div>
          <div>
            <p>Confirm Password</p>
            <input type="password" name="confrimPass" id="confrimPass" placeholder='Minimum of 8 characters' />
          </div>
          <div>
            <Link to="/forget/4">
              <Button name="Proceed"/>
            </Link>
          </div>
        </form>
      </div>
      <div className={classes.item2}>

      </div>
    </div>
  )
}

export default NewPassword
