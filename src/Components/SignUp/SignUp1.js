import React,{useState, useEffect} from 'react'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'
import classes from './SignUp1.module.css'
import Logo from '../Logo/Logo'
import Logo2 from '../../Assets/welcome.png'
import { Formik, Form} from 'formik'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TextField from '../Login/TextField'
import * as Yup from "yup"
import ScaleLoader from 'react-spinners/ScaleLoader'

const SignUp1 = () => {
    let [loading, setLoading] = useState(false);
    let [color, setColor] = useState('white');
  const override  = {
    display: "block",
    borderColor: "rgb(238, 88, 238)",
  };
    const navigate = useNavigate()
    const validate=Yup.object({
        email:Yup
        .string()
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
            setLoading(true)
            axios.post("https://moneynow.onrender.com/api/signup",values)
            .then(res=>{
                setLoading(false)
                localStorage.setItem("email", res.data.saveNewUser.email)
                console.log(res)
                navigate("/verify")    
             })
             .catch(error=>{
                console.log(error.message)
                if(error.message==="Network Error"){
                    toast.error('Network Issue')
                }else{

                    toast.error("User already exist ")  
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
                        <h3>Welcome!</h3>
                        <p>To create an account, enter your e-mail</p>
                    </div>
                    <div className={classes.forform}>
                        <Form className={classes.form}>
                            <div>
                                <TextField label="Email" name="email" placeholder="xzy@gmail.com"/> 
                            </div>
                            <>
                                {
                                    loading ?
                                    <button>
                                        <ScaleLoader color={color} loading={loading}size={20} cssOverride={override} aria-label="Loading Spinner" data-testid="loader"/>
                                    </button>
                                    :
                                    <Button name="Proceed" />
                                }
                            </>
                        </Form>
                        <div className={classes.para}>
                            <p>Already have an account? 
                                <Link to="/">
                                    <span> Sign In</span> 
                                </Link>
                            </p>

                        </div>
                    </div>
                </div>
            )}

        </Formik>
        <div className={classes.item2}>
        <img src={Logo2} alt="welcome" />
        </div>
      
    </div>
  )
}

export default SignUp1


