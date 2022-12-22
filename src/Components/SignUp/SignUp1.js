import React,{useState} from 'react'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'
import classes from './SignUp1.module.css'
import Logo from '../Logo/Logo'
import Logo2 from '../../Assets/welcome.png'
import { useFormik} from 'formik'
import { basicSchema } from '../Schema/Schema'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const SignUp1 = () => {
    const [loginSpin, setLoginSpin] = useState(false)
    const navigate = useNavigate()
    const {values, errors, handleBlur, handleChange, handleSubmit,} = useFormik({
        initialValues:{
            email:""
        },
        validationSchema: basicSchema,
        onSubmit: (values)=>{
            axios.post("https://moneynow.onrender.com/api/signup",values)
            .then(res=>{
                console.log(res)
                    navigate("/verify")
            })
            
            .catch(error=>{
                console.log(error.message)
            })
        }
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
                    <h3>Welcome!</h3>
                    <p>To create an account, enter your e-mail</p>
                </div>
                <form action="" onSubmit={handleSubmit}>
                    <p className={classes.heading}>Email</p>
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
            <img src={Logo2} alt="welcome" />

        </div>
    </div>
    

  )
}

export default SignUp1