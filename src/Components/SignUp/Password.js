import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import Logo from '../Logo/Logo'
import classes from './Password.module.css'


const Password = () => {
  return (
    <div className={classes.container}>
      <div className={classes.item1}>
        <div>
            <Logo/>
        </div>
        <div className={classes.login}>
          <h3>Create Password</h3>
          <p>Add Security to Your Account</p>
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
            <Link to="/bvn">
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

export default Password
