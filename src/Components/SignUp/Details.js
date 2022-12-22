import React, { useState } from 'react'
import Logo from '../Logo/Logo'
import Logo5 from '../../Assets/password.jpg'
import classes from './Details.module.css'
import  './Details.module.css'
import Button from '../Button/Button'
import axios from "axios"
import { detailsSchema } from '../Schema/DetailsSchema'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'

const url ='https://moneynow.onrender.com/api/nameSignUp';
const Details = () => { 
    const navigate= useNavigate()
    const {values, errors, handleBlur, handleChange, handleSubmit} = useFormik({
        initialValues:{
            firstName:"",
            lastName:"",
            phoneNumber:"",
            refer: "",

        },
        validationSchema: detailsSchema,
        onSubmit:(values)=>{
            axios.put("https://moneynow.onrender.com/api/nameSignUp?id=639b9e5ce2ea19656ef00cf9", values)
            .then(res=>{
                console.log(res)
                navigate("/password")

            })
            .catch(error=>{
                console.log(error.message)
            })

        }
        
    })
    console.log(errors)
    console.log("values", values)
  return (
    <div className={classes.container}>
        <div className={classes.item1}>
            <div className={classes.logo}>
                <Logo/>
            </div>
            <div className={classes.login}>
                <h3>Enter Name</h3>
                <p>Kindly Provide Your Name </p>
            </div>
            <form action="" className={classes.details} onSubmit={handleSubmit}>
                <div>
                    <p className={classes.detailsP}> FisrtName</p>
                    <input 
                    type="text" 
                    name="firstName" 
                    id="firstName" 
                    value={values.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder='Enter your First Name' />
                    <p className={classes.error}>{errors.firstName}</p>
                </div>
                <div>
                    <p className={classes.detailsP}>Last Name</p>
                    <input 
                    type="text" 
                    name="lastName" 
                    id="lastName" 
                    value={values.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder='Enter your Last Name'/>
                    <p className={classes.error}>{errors.lastName}</p>
                </div>
                <div>
                    <p className={classes.detailsP}>Phone Number</p>
                    <input 
                    type="tel" 
                    name="phoneNumber" 
                    id="PhoneNumber" 
                    value={values.phoneNumber}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Type your Phone Number"
                    />
                    <p className={classes.error}>{errors.phoneNumber}</p>
                </div>
                <div>
                    <p className={classes.detailsP}>Referral ID (Optional)</p>
                    <input 
                    type="text" 
                    name="refer" 
                    id="refer" 
                    placeholder='jw34r'
                    value={values.refer}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    />
                    <p className={classes.error}>{errors.refer}</p>
                </div>
                <div>
                        <Button  name="Proceed"/>
                </div>
            </form>

        </div>
        <div className={classes.item2}>
            <img src={Logo5} alt="picture" />
        </div>
    </div>
  )
}

export default Details
