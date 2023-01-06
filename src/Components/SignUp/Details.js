import React, {useState} from 'react'
import Logo from '../Logo/Logo'
import Logo5 from '../../Assets/password.jpg'
import classes from './Details.module.css'
import  './Details.module.css'
import Button from '../Button/Button'
import axios from "axios"
import { Formik, Form } from 'formik'
import { useNavigate } from 'react-router-dom'
import TextField from '../Login/TextField'
import * as Yup from "yup"
import { toast } from 'react-toastify'


const Details = () => {
    const [loading, setLoading] = useState(false)
    const style ={backgroundColor:"rgb(237, 162, 237)",}
    const navigate = useNavigate()
    const validate=Yup.object({
        firstName:Yup
        .string()
        .matches(/^[A-Za-z ]*$/, 'Please enter valid name')
        .max(40)
        .required("First name is required"),
        lastName:Yup
        .string()
        .matches(/^[A-Za-z ]*$/, 'Please enter valid name')
        .max(40)
        .required("Last name is equired"),
        phoneNumber:Yup
        .number()
        .typeError("That doesn't look like a phone number")
        .positive("A phone number can't start with a minus")
        .integer("A phone number can't include a decimal point")
        .required('A phone number is required'),
        referralId:Yup 
        .string()

    })

  return (
    <div className={classes.container}>
        <Formik
        initialValues={{
            firstName:"",
            lastName:"",
            phoneNumber:"",
            referralId: ""
        }}
        validationSchema={validate}
        onSubmit={values=>{
            console.log(values)
            setLoading(true)
            axios.put(`https://moneynow.onrender.com/api/nameSignUp?id=${localStorage.getItem("id")}`, values)
            .then(response=>{
                setLoading(false)
                console.log(response)
                navigate("/password")
            })
            .catch(error=>{
                console.log(error.message)
                if(error.message==="Network Error"){
                    toast.error("Network Issues")
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
                        <h3>Enter Name</h3>
                        <p>Kindly Provide Your Name</p>
                    </div>
                    <div className={classes.forform}>
                        <Form className={classes.form}>
                            {console.log("values", formik.values)}
                            <div>
                                <TextField label="First Name" name="firstName"type="text" placeholder='Enter your First Name'/>
                            </div>
                            <div>
                                <TextField label="Last Name" name="lastName"type="text" placeholder='Enter your Last Name'/>
                            </div>
                            <div>
                                <TextField label="Phone Number" name="phoneNumber"type="tel" placeholder="Type your Phone Number"/>
                            </div>
                            <div>
                                <TextField label="Referral Id" name="referralId" placeholder="jw34r"type="text"/>
                            </div>
                            <div>
                                {
                                    loading ?
                                    <Button style={style} name="Loading..."/>
                                    :
                                    <Button name="Proceed"/>
                                }
                            </div>

                        </Form>
                    </div>
                </div>
            )}

        </Formik>

        <div className={classes.item2}>
            <img src={Logo5} alt="pic" />
        </div>

    </div>
  )
}

export default Details

