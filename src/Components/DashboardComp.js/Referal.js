import React,{useEffect, useState} from 'react'
import Nav from './Nav'
import SideBar from './Sidebar'
import gift from '../../Assets/gift.svg'
import signup from '../../Assets/signup.svg'
import invitation from '../../Assets/invitation.svg'
import classes from './Referal.module.css'
import MoonLoader from "react-spinners/MoonLoader";
import {RiFileCopyLine} from 'react-icons/ri';
import {FiShare} from 'react-icons/fi'
import Button from '../Button/Button'
import axios from 'axios'


const Referal = () => {
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
    const handleClick =(e)=>{
      e.preventDefault()
      axios.post(`https://moneynow.onrender.com/api/ref/${localStorage.getItem("userID")}`)
      .then(res=>{
        console.log(res)
        localStorage.setItem("referralCode", res.data.updatedUser.referralId)
      })
      .catch(error=>{
        console.log(error)
      })
    }
  return (
    <div>
        <Nav/>
        <div className={classes.containers}>
            <SideBar/>
            {
                loading ?
                <MoonLoader color={color} loading={loading} size={50} cssOverride={override} aria-label="Loading Spinner" data-testid="loader"/>:

                    <div className={classes.main}>
                        <div className={classes.refer}>
                            <h2>Referrals</h2>
                            <p>Refer your friends to  Money<span>Now</span>, if they sign up, you  enjoy rewards on every referrals</p>
                        <div className={classes.referrals}>
                        <div className={classes.friends}>
                            <img  src={invitation} alt="invitation" />
                            <p>Invite your friends<br/>with the referral code</p>
                        </div>
                        <div className={classes.friends}>
                            <img  src={signup} alt="signup" />
                            <p>They sign up</p>
                        </div>
                        <div className={classes.friends}>
                            <img  src={gift} alt="gift" />
                            <p>You get rewards<br/>on every referral</p>
                        </div>
                        </div>
                        <div className={classes.texxt}>
                        <h5>Share the referral code</h5>
                        <h6>You can also share your referral code by copying and sending or sharing it on your social media</h6>
                        <div className={classes.forshare}>
                            <input 
                            type="text" 
                            name="code"
                            value={localStorage.getItem("referralCode")}
                            // onChange={handleChange}
                            className={classes.code}
                            />
                            {/* <p vaule={localStorage.getItem("referralCode")}></p> */}
                            <div>
                            <RiFileCopyLine/>
                            <FiShare/>
                            </div>
                        </div>
                        <button onClick={handleClick}>Generate Code</button>
                        </div>
                        </div>
                    </div>
            }
        </div>
    </div>
  )
}

export default Referal
