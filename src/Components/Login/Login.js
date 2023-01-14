import React, { useState } from 'react'
import Logo from '../Logo/Logo'
import {Formik, Form} from 'formik'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'
import classes from './Login.module.css'
import { useNavigate } from 'react-router-dom'
import * as Yup from "yup"
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import TextField from './TextField'
import { Icon } from 'react-icons-kit'
import {eye} from 'react-icons-kit/ionicons/eye'
import {eyeDisabled} from 'react-icons-kit/ionicons/eyeDisabled'
import ScaleLoader from 'react-spinners/ScaleLoader'

const Login = () => {
    const [type, setType]= useState("password")
    const [icon, setIcon]= useState(eyeDisabled)
  const [loading, setLoading] = useState(false)
  const style ={
    backgroundColor:"rgb(237, 162, 237)",

}
let [color, setColor] = useState('white');
  const override  = {
    display: "block",
    borderColor: "rgb(238, 88, 238)",
  };
  const navigate = useNavigate()
    const validate= Yup.object({
        email:Yup
        .string()
        .email("Please enter valid email")
        .required("Email is required"),
        password:Yup
        .string()
        .min(8)
        .required("Password is required"),
    })
    const handleToggle=()=>{
        if(type==="password"){
            setIcon(eye);
            setType("text")
        }
        else{
          setIcon(eyeDisabled)
          setType("password")  
        }
    }
  return (
    <div className={classes.container}>
        <Formik
        initialValues={{
            email:"",
            password:""
        }}
        validationSchema={validate}
        onSubmit={values=>{
            console.log(values)
                setLoading(true)
            axios.post("https://moneynow.onrender.com/api/login", values)
            .then(response=>{ 
                setLoading(false)
                console.log("response", response.data)
                console.log("name  is",`${response.data.user.firstName} ${response.data.user.lastName}`)
                localStorage.setItem("username", `${response.data.user.firstName} ${response.data.user.lastName}`)
                localStorage.setItem("token", response.data.access_token)
                localStorage.setItem("userID", response.data.user._id)
                console.log(localStorage.getItem("userID"))
                console.log(localStorage.getItem("token"))
                //  if(response.data){
                    navigate("/dashboard")
                //  }   
             })
             .catch(error=>{
                 console.log(error.message)
                 if(error.message=== "Network Error"){
                    toast.error("Network Issues 🤦‍♂️")
                 }else{
                     toast.error('Invalid Credentials')
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
                        <h3>Welcome Back!</h3>
                        <p>To gain access into your account, you have to login</p>
                    </div>
                    <div className={classes.forform}>
                        <Form className={classes.form}>
                            <div>
                                <TextField label="Email" name="email" placeholder="Type your e-mail" type="text"/>
                            </div>
                            <div className={classes.eyeDisabled}>
                                <TextField label="Password" name="password" placeholder="Minimum of 8 characters" type={type}/>
                                <span onClick={handleToggle}><Icon icon={icon} /></span>
                            </div>
                            <div className={classes.remember}>
                                <input type="checkbox" name="" id=""className={classes.check} />
                            <p>Remember me</p>
                            </div>
                            <div>
                                {
                                    loading?
                                    <button>
                                        <ScaleLoader color={color} loading={loading}size={20} cssOverride={override} aria-label="Loading Spinner" data-testid="loader"/>
                                    </button>
                                    :
                                    <Button name="Proceed" />
                                }
                            </div>
                        </Form>
                        <div className={classes.para}>
                            <Link to="/forgetpassword">
                            <p className={classes.link}>Forgot Password?</p>
                            </Link>
                        </div>
                        <p className={classes.why}>New to MoneyNow?
                            <Link to="/signup">
                            <span className="">Sign Up</span>
                            </Link>
                        </p>
                    </div>
                </div>
            )}

        </Formik>
        <div className={classes.item2}></div>

    </div>
  )
}

export default Login
