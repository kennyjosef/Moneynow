import { Formik, Form} from 'formik'
import React, {useState} from 'react' 
 import Logo from '../Logo/Logo'
 import Button from '../Button/Button'
 import classes from './ForgetPassword.module.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import TextField from './TextField'
import * as Yup from "yup"
import { toast } from 'react-toastify'


const ForgetPassword = () => {
const [loading, setLoading] = useState(false)
const style ={backgroundColor:"rgb(237, 162, 237)",}
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
            console.log( "Email is", JSON.stringify(values))
            setLoading(true)
            axios.put('https://moneynow.onrender.com/api/forgotpassword', values)
            .then(res=>{
                setLoading(false)
                localStorage.setItem('userEmail', values.email)
                console.log(res)
                // console.log(res.email)
                navigate('/passwordverify')
            })
            .catch(error=>{
             console.log(error.message)
             if(error.message==="Network Error"){
                toast.error("Network Issues")
             }else{
                toast.error("No former user with this Email.")
             }
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
                                {
                                    loading?
                                    <Button style={style} name="Loading..."/>
                                    :
                                    <Button name="Reset"/>
                                }
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


