import { Formik, Form} from 'formik'
import React from 'react' 
 import Logo from '../Logo/Logo'
 import Button from '../Button/Button'
 import classes from './ForgetPassword.module.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import TextField from './TextField'
import * as Yup from "yup"


const ForgetPassword = () => {
  const navigate = useNavigate()
    const validate= Yup.object({
        email:Yup.string()
        .email("Please enter valid email")
        .required("Email is required"),

    })
  return (
    <div className={classes.container}>
        <Formik
        initialValues={{
            email:""
        }}
        validationSchema={validate}
        onSubmit={values=>{
            console.log(values)
            axios.put('https://moneynow.onrender.com/api/forgotpassword', values)
            .then(res=>{
                localStorage.setItem('userEmail', res.config.data)
                console.log(res)
                console.log(res.config.data.email)
                navigate('/passwordverify')
            })
            .catch(error=>{
             console.log(error.message)
            })
        }}
        >
            {formik=>(
                <div className={classes.item1}>
                    <div className={classes.logo}>
                        <Logo/>
                    </div>
                    <div className={classes.login}>
                        <h3>Forgot Password</h3>
                        <p>Reset Password to gain access to your account</p>
                    </div>
                    <div className={classes.forform}>
                        <Form className={classes.form}>
                            {console.log("values", formik.values)}
                            <div>
                                <TextField label="Email" name="email" type="email" placeholder="xyz@gmail.com"/>
                            </div>
                            <div>
                                <Button name="Reset"/>
                            </div>
                        </Form>
                    </div>
                </div>
                
            )}
        </Formik>
        <div className={classes.item2}></div>
      
    </div>
  )
}

export default ForgetPassword


