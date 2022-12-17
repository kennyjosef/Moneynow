import React from 'react'
import Logo1 from '../../Assets/logos.JPG'
import classes from './Logo.module.css'
const Logo = () => {
  return (
    <div>
        <div className={classes.logo}>
            <img src={Logo1} alt="icon" />
        </div>
    </div>
  )
}

export default Logo
