import React, {useState, useEffect} from 'react'
import Button from '../Button/Button'
import Logo from '../Logo/Logo'
import Logo2 from '../../Assets/mark.jpg'
import Logo3 from '../../Assets/success.png'
import { Link } from 'react-router-dom'
import classes from './ForgetSucc.module.css'
import {HiThumbUp} from 'react-icons/hi'
import MoonLoader from "react-spinners/MoonLoader";

const ForgetSucces = () => {
    const [loading, setLoading]=useState(false)
  let [color, setColor] = useState(" rgb(238, 88, 238)");
  const override  = {
    display: "block",
    borderColor: "rgb(238, 88, 238)",
  };
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    }, 3000)

  },[])
  return (
    <div className={classes.container}>
      <div className={classes.item1}>
            <div className={classes.logo}>
                <Logo/>
            </div>
            <div className={classes.mark}>
                {
                    loading ?
                    <MoonLoader color={color} loading={loading} size={50} cssOverride={override} aria-label="Loading Spinner" data-testid="loader"/>:
                    <HiThumbUp className='thumb'/>
                }
            </div>
            <div className={classes.login}>
                <h3>Password reset successful</h3>
                <p>You have successfully reset your password</p>
                <p>Kindly input your login details to access your account</p>
            </div>
            <div>
                <Link to="/">
                    <Button name="Log In"/>
                </Link>
            </div>
        </div>
        <div className={classes.item2}>
            <img src={Logo3} alt="done" />
        </div>

    </div>
  )
}

export default ForgetSucces
