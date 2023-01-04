import React, {useState, useEffect} from 'react'
import Nav from './Nav'
import SideBar from './Sidebar'
import classes from './Payment.module.css'
import bank from '../../Assets/bank.svg'
import card from '../../Assets/card.svg'
import Button from '../Button/Button'
// import './Modal.css'
import MoonLoader from "react-spinners/MoonLoader";
import AddBank from './AddBank'
import AddCard from './AddCard'
import { Link } from 'react-router-dom'
const Payment = () => {
  const [loading, setLoading]=useState(false)
  let [color, setColor] = useState(" rgb(238, 88, 238)");
  const override  = {
    display: "block",
    margin: "300px auto",
    borderColor: "rgb(238, 88, 238)",
  };
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    }, 3000)

  },[])
  return (
    <div>
        <Nav/>
        <div className={classes.containers}>
            <SideBar/>
            {
              loading?
              <MoonLoader color={color} loading={loading} size={50} cssOverride={override} aria-label="Loading Spinner" data-testid="loader"/>:
            <div className={classes.main}>
              <div className={classes.content}>
                <h3>HELLO VICTOR!</h3>
                <p>Add Your Preferred Payment Method</p>
              </div>
              <div className={classes.choose}>
                <h4>Choose Your Primary Payment Method</h4>
                <p>Please add your account’s primary payment method which will be used to pay for your contributions. <br /> Don’t worry, you can always change this later</p>
              </div>
              <div className={classes.payment}>
                <h4>Select a Payment Method</h4>
                <div className={classes.box}>
                  <div className={classes.boxContent}>
                  <img src={bank} alt="bank" />
                  <div>
                  <p>Bank account <br />
                  Pay via one-time bank transfer</p>
                  </div>
                  </div>
                  <>
                  <AddCard/>
                  </>
                </div>
                <div className={classes.box}>
                  <div className={classes.boxContent}>
                    <img src={card} alt="card" />
                  <div>
                    <p>Credit or Debit Card <br />
                    Pay via card</p>
                  </div>
                  </div>
                  <>
                  <AddBank/>
                  </>
                </div>
                <div className={classes.btns}>
                  <Button name="Go Back"/>
                    <Button name="Continue"/>
                </div>
              </div>
            </div>
            
            
          }
          </div>
    </div>
  )
}

export default Payment