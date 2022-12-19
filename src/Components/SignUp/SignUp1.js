import React from 'react'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'
import classes from './SignUp1.module.css'
import Logo from '../Logo/Logo'
import { useFormik} from 'formik'
import { basicSchema } from '../Schema/Schema'


const onSubmit=()=>{
    console.log("submitted")
}

const SignUp1 = () => {
    const {values, errors, handleBlur, handleChange, handleSubmit,} = useFormik({
        initialValues:{
            email:""
        },
        validationSchema: basicSchema,
        onSubmit
    });
    console.log(errors);
    console.log("data", values)
  return (
    <div className={classes.container}>
        <div className={classes.item1}>
            <div className={classes.logo}>
                <Logo/>
            </div>
            <div>
                <div className={classes.login}>
                    <h3>Welcome Back!</h3>
                    <p>To create an account, enter your e-mail</p>
                </div>
                <form action="" onSubmit={handleSubmit}>
                    <p>Email</p>
                    <input 
                    className={errors.email ? "errorMessage": ""} 
                    type="email" 
                    name="email" 
                    id="email" 
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder='xzy@gmail.com'
                    />
                    <p className={classes.error}>{errors.email}</p>
                    {/* <Link to="/verify"> */}
                        <Button name="Proceed"/>
                    {/* </Link> */}
                </form>
                <div className={classes.para}>
                    <p>Already have an account? 
                        <Link to="/">
                            <span> Sign In</span> 
                        </Link>
                    </p>

                </div>
            </div>

        </div>
        <div className={classes.item2}>

        </div>
    </div>
    

  )
}

export default SignUp1