import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../Button/Button'
import Logo from '../Logo/Logo'
import Logo5 from '../../Assets/details.png'
import classes from './Password.module.css'
import axios from 'axios'

let id =localStorage.getItem("id");
const Password = () => {
  const navigate= useNavigate()
  const initialValues = {password: "", confirmPassword: ""}
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors , setFormErrors]= useState({})
    const [isSubmit, setIstSubmit] = useState (false)
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
        setIstSubmit(true)
        axios.put(`https://moneynow.onrender.com/api/passwordSignUp?id=${ localStorage.getItem("id")}`, formValues)
        .then(res=>{
          console.log(res)
          navigate('/bvn')
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
        else if(values.password.length < 8){
          errors.password="Password should contain characters 8 or more"
        }else if(values.password.length > 10){
          errors.password="Password cannot be greater than ten characters"
        }
        if(String(values.confirmPassword)!==String(values.password)){
          errors.confirmPassword="Passowrd did not match"
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
          <p>Add Security to Your Accountme</p>
        </div>
        
        <form action=''  onSubmit={handleSubmit}>
            <p className={classes.heading}>Password</p>
          <div>
            <input 
            type="password" 
            name="password" 
            value={formValues.password}
            onChange={handleChange}
            placeholder='Minimum of 8 characters'/>
             <p className={classes.error}>{formErrors.password}</p>
          </div>
            <p className={classes.heading}>Confirm Password</p>
          <div>
            <input 
            type="text" 
            name="confirmPassword" 
            value={formValues.confirmPassword}
            onChange={handleChange}
            placeholder='Confirm your Password'/>
             <p className={classes.error}>{formErrors.confirmPassword}</p>
          </div>
          <div>
              <Button name="Proceed"/>
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


