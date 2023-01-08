import React ,{useState, useEffect}from 'react'
import SideBar from './Sidebar'
import MoonLoader from "react-spinners/MoonLoader";
import Nav from './Nav'
import classes from './More.module.css'
import {BsFillPersonFill, BsQuestionLg} from 'react-icons/bs'
import {MdOutlinePayment} from 'react-icons/md'
import {BiLock} from 'react-icons/bi'
import {CgNotes} from 'react-icons/cg'
import axios from "axios";

const More = () => {
    const [loading, setLoading]=useState(false)
    const [myName, setMyName] =useState("")
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
  
    },[]);
    const getUserName = () =>  {
        axios.get(`https://moneynow.onrender.com/api/username?id=${localStorage.getItem("userID")}`)
        .then(res => {
          console.log(res)
          setMyName(res.data.fullName)
        })
        .catch(err => {
          console.log(err)
        })
      }
      getUserName()
  return (
    <div>
        <Nav/>
        <div className={classes.containers}>
            <SideBar/>
            {
                loading?
                <MoonLoader color={color} loading={loading} size={50} cssOverride={override} aria-label="Loading Spinner" data-testid="loader"/>:

            <div className={classes.main}>
                <div className={classes.acc}>
                    <BsFillPersonFill className={classes.ico}/>
                    <div>
                        <h5>{myName}</h5>
                    </div>
                </div>
                <div className={classes.acc}>
                    <MdOutlinePayment className={classes.ico}/>
                    <div>
                    <h5>Saved Cards</h5>
                    <p>Manage Connected Cards</p>
                    </div>
                </div>
                <div className={classes.acc}>
                    <BsQuestionLg className={classes.ico}/>
                    <div>
                    <h5>Get Help</h5>
                    <p>Get Support or Send Feedback</p>
                    </div>
                </div>
                <div className={classes.acc}>
                    <BiLock className={classes.ico}/>
                    <div>
                    <h5>Security</h5>
                    <p>Protect Yourself from Intruders</p>
                    </div>
                </div>
                <div className={classes.acc}>
                    <CgNotes className={classes.ico}/>
                    <div>
                    <h5>Legals</h5>
                    <p>About Our Contract with You</p>
                    </div>
                </div>
            </div>
            }
        </div>
      
    </div>
  )
}

export default More
