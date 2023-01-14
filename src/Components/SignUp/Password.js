import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../Button/Button'
import Logo from '../Logo/Logo'
import Logo5 from '../../Assets/details.png'
import classes from './Password.module.css'
import axios from 'axios'
import {Formik, Form} from "formik"
import TextField from '../Login/TextField'
import * as Yup from "yup"
import { Icon } from 'react-icons-kit'
import {eye} from 'react-icons-kit/ionicons/eye'
import {eyeDisabled} from 'react-icons-kit/ionicons/eyeDisabled'
import ScaleLoader from 'react-spinners/ScaleLoader'

const Password = () => {
  const [loading, setLoading] = useState(false)
  let [color, setColor] = useState('white');
  const override  = {
    display: "block",
    borderColor: "rgb(238, 88, 238)",
  };
  const [type, setType]= useState("password")
  const [icon, setIcon]= useState(eyeDisabled)
  const [types, setTypes]= useState("password")
  const [icons, setIcons]= useState(eyeDisabled)
  const navigate = useNavigate()
  const validate= Yup.object({
    password: Yup.string()
    .min(8, "Password must be at least 8 character")
    .required("Password is required"),
    confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], "Password must match")
    .required("Confirm pasword is required")
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
const handleToggles=()=>{
  if(types==="password"){
      setIcons(eye);
      setTypes("text")
  }
  else{
    setIcons(eyeDisabled)
    setTypes("password")  
  }
}
  return (
    <div className={classes.container}>
      <Formik 
      initialValues={{
        password: "",
        confirmPassword: ""
      }}
      validationSchema={validate}
      onSubmit={values=>{
        console.log(values)
        axios.put(`https://moneynow.onrender.com/api/passwordSignUp?id=${ localStorage.getItem("id")}`, values)
         .then(res=>{
          console.log(res)
          navigate('/bvn')
         })
         .catch(error=>{
           console.log(error)
         })

      }}
      >
        {formik=>(
          <div className={classes.item1}>
            <div>
              <Logo/>
            </div>
            <div className={classes.login}>
              <h3>Create Password</h3>
              <p>Add Security to Your Account</p>
              <div className={classes.forform}>
                <Form className={classes.form}>
                  {console.log("values", formik.values)}
                  <div className={classes.eyeDisabled}>
                    <TextField label="Password" name="password"  type={types} placeholder="Minimum of 8 Characters"/>
                    <span onClick={handleToggles}><Icon icon={icons}  /></span>
                  </div>
                  <div className={classes.eyeDisabled}>
                    <TextField label="Confirm Password" name="confirmPassword" type={type} placeholder="Confirm your password"/>
                    <span onClick={handleToggle}><Icon icon={icon}  /></span>
                  </div>
                  <div>
                    {
                      loading?
                      <button>
                        <ScaleLoader color={color} loading={loading}size={20} cssOverride={override} aria-label="Loading Spinner" data-testid="loader"/>
                      </button>
                      :
                    <Button name="Proceed"/>
                    }
                  </div>
                </Form>
              </div>
            </div>
          </div>
        )}
      </Formik>
      <div className={classes.item2}>
        <img src={Logo5} alt="password"/>
      </div>
    </div>
  )
}

export default Password
