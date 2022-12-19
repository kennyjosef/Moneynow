import React from 'react'
import Button from '../Button/Button'
import Logo from '../Logo/Logo'
import Logo4 from '../../Assets/details.jpg'
// import { Link } from 'react-router-dom'
import classes from './NewPassword.module.css'
import { useFormik} from 'formik'
import { passwordSchema } from '../Schema/PasswordSchema'

const onSubmit=()=>{
  console.log("password created")
}
const NewPassword = () => {
  const {values, errors, handleChange,handleBlur, handleSubmit,} = useFormik({
    initialValues:{
      password:"",
      confirmPassword: ""
    },
    validationSchema : passwordSchema,
    onSubmit
    
  });
  console.log('password', values)
  console.log(errors)
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
        <form action="" onSubmit={handleSubmit} >
          <div>
            <p>Password</p>
            <input 
            type="password" 
            name="password" 
            id="password" 
            placeholder='Minimum of 8 characters'
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur} 
            />
            <p className={classes.error}>{errors.password}</p>
          </div>
          <div>
            <p>Confirm Password</p>
            <input 
            type="password" 
            name="confrimPassword" 
            id="confrimPassword" 
            placeholder='Minimum of 8 characters'
            value={values.confirm}
            onChange={handleChange}
            onBlur={handleBlur} 
            />
            <p className={classes.error}>{errors.confirmPassword}</p>
          </div>
          <div>
            {/* <Link to="/forget/4"> */}
              <Button name="Proceed"/>
            {/* </Link> */}
          </div>
        </form>
      </div>
      <div className={classes.item2}>
        <img src={Logo4} alt="details" />

      </div>
    </div>
  )
}

export default NewPassword