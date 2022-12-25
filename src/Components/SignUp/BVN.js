import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'
// import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import Logo from '../Logo/Logo'
import { bvnSchema } from '../Schema/BvnSchema'
import classes from './BVN.module.css'
import { useNavigate } from 'react-router-dom'


// const onSubmit=()=>{
//     console.log("submitted")
// }
let id =localStorage.getItem("id");
const BVN = () => {

    const navigate = useNavigate();
    // navigate("/")
    const formik= useFormik({
        initialValues:{
            bvn:""
        },
        validationSchema: bvnSchema,
        onSubmit:(values)=>{
            axios.put(`https://moneynow.onrender.com/api/bvnSignUp?id=${localStorage.getItem("id")}`, values)
            .then(res=>{
                console.log(res)
                navigate('/')
            })
            .catch(error=>{
                console.log(error.message)
            })
        }
        
    });
    // console.log(formik.errors)
  return (
    <div className={classes.container}>
        <div className={classes.item1} >
            <div>
                <Logo/>
            </div>
            <div className={classes.login}>
                <h3>BVN</h3>
                <p>Kindly Provide Your Bank Verification Number</p>
            </div>
            <form action="" onSubmit={formik.handleSubmit}>
                <div>
                    <p>Enter your Bank Verification Number</p>
                    <input 
                    type="text" 
                    name="bvn" 
                    id="bvn" 
                    value={formik.values.bvn}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    />
                    <p className={classes.error}>{formik.errors.bvn}</p>
                    <p className={classes.dial}>Dial *565*0# on your mobile phone to get your BVN</p>
                </div>
                <div>
                    {/* <Link to="/"> */}
                        <Button name="Proceed" />
                    {/* </Link> */}
                </div>
            </form>

        </div>
        <div className={classes.item2}></div>
      
    </div>
  )
}

export default BVN
