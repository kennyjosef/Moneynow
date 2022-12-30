import axios from 'axios'
import { Formik, Form } from 'formik'
import React from 'react'
import Button from '../Button/Button'
import Logo from '../Logo/Logo'
import classes from './BVN.module.css'
import { useNavigate } from 'react-router-dom'
import TextField from '../Login/TextField'
import * as Yup from "yup"



let id =localStorage.getItem("id");
const BVN = () => {
  const navigate = useNavigate()
    const bvnRegex = RegExp(/^[0-9]*$/);
    const validate= Yup.object({
        bvn:Yup
        .string()
        .max(11)
        .matches(bvnRegex, {message:"Input valid BVN"})
        .required("BVN is required")
    })    
  return (
    <div className={classes.container}>
        <Formik
        initialValues={{
            bvn:""
        }}
        validationSchema={validate}
        onSubmit={values=>{
            console.log(values)
            axios.put(`https://moneynow.onrender.com/api/bvnSignUp?id=${localStorage.getItem("id")}`, values)
            .then(res=>{
                console.log(res)
                navigate('/')
            })
            .catch(error=>{
            console.log(error.message)
            })
        }}>

        <div className={classes.item1} >
            <div>
                <Logo/>
            </div>
            <div className={classes.login}>
                <h3>BVN</h3>
                <p>Kindly Provide Your Bank Verification Number</p>
            </div>
            <div className={classes.forform}>
                <Form className={classes.form}>
                    <div>
                        <TextField label="Enter your Bank Verification Number"
                        type="text" name="bvn"/>
                    </div>
                    <p className={classes.dial}>Dial *565*0# on your mobile phone to get your BVN</p>
                    <div>
                            <Button name="Proceed" />
                    </div>

                </Form>
            </div>
            </div>
        </Formik>
        <div className={classes.item2}></div>
      
    </div>
  )
}

export default BVN
