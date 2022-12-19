import { useFormik } from 'formik'
import React from 'react'
// import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import Logo from '../Logo/Logo'
import { bvnSchema } from '../Schema/BvnSchema'
import classes from './BVN.module.css'
// import { useNavigate } from 'react-router-dom'


const onSubmit=()=>{
    console.log("submitted")
}
const BVN = () => {
    // const navigate = useNavigate();
    // navigate("/")
    const {values, errors , handleSubmit, handleChange, handleBlur}= useFormik({
        initialValues:{
            bvn:""
        },
        validationSchema: bvnSchema,
        onSubmit
        
    });
    console.log(errors)
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
            <form action="" onSubmit={handleSubmit}>
                <div>
                    <p>Enter your Bank Verification Number</p>
                    <input 
                    type="number" 
                    name="bvn" 
                    id="bvn" 
                    value={values.bvn}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    />
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
