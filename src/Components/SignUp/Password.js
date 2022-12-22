import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import Logo from '../Logo/Logo'
import Logo5 from '../../Assets/details.png'
import classes from './Password.module.css'
import axios from 'axios'


const Password = () => {
  const initialValues = {password: "", confrimPassword: ""}
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors , setFormErrors]= useState({})
    const handleChange= (e)=>{
        const {name, value} =e.target
        setFormValues(preValue=>{
          return{...preValue, [name]:value}
        })
      }
      console.log(formValues)
    const handleSubmit=(e)=>{
        e.preventDefault()
        setFormErrors(validate(formValues))
        axios.put("https://moneynow.onrender.com/api/passwordSignUp?id=639b9e5ce2ea19656ef00cf9", formValues)
        .then(res=>{
          console.log(res)
        })
        .catch(error=>{
          console.log(error)
        })
    }

    const validate = (values)=>{
        const errors ={};
        if(values.password===""){
          errors.password="Password is required"
        }
        else if(values.password.length < 4){
          errors.password="Password must be more than 4 characters"
        }else if(values.password.length > 10){
          errors.password="Password cannot be greater than ten characters"
        }
        if(String(values.confrimPassword)!==String(values.password)){
          errors.confrimPassword="Passowrd did not match"
        }
        return errors
    }
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
        
        <form action=''  onSubmit={handleSubmit}>
            <p className={classes.heading}>Password</p>
          <div>
            <input 
            type="password" 
            name="password" 
            // id="password" 
            value={formValues.password}
            onChange={handleChange}
            placeholder='Minimum of 8 characters'/>
             <p className={classes.error}>{formErrors.password}</p>
          </div>
            <p className={classes.heading}>Confirm Password</p>
          <div>
            <input 
            // id="confrimPassword" 
            type="text" 
            name="confrimPassword" 
            value={formValues.confrimPassword}
            onChange={handleChange}
            placeholder='Confirm your Password'/>
             <p className={classes.error}>{formErrors.confrimPassword}</p>
          </div>
          <div>
            {/* <Link to="/bvn"> */}
              <Button name="Proceed"/>
            {/* </Link> */}
          </div>
        </form>
      </div>
      <div className={classes.item2}>
        <img src={Logo5} alt="password" />

      </div>

    </div>
  )
}

export default Password


