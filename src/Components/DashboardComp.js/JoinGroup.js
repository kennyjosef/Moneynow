import React, {useState, useEffect} from 'react'
import Nav from './Nav'
import SideBar from './Sidebar'
import MoonLoader from "react-spinners/MoonLoader";
import classes from './Join.module.css'
import Button from '../Button/Button'
import axios from 'axios';


const JoinGroup = () => {
    const [loading, setLoading]=useState(false)
    let [color, setColor] = useState(" rgb(238, 88, 238)");
    const token= localStorage.getItem("token")
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
    const createGroup =()=>{
      // e.preventDefault()
      axios.post(`https://moneynow.onrender.com/group/create/?id=${localStorage.getItem("userID")}`,
        {headers:{authorization:`Bearer ${token}`}})
      .then(res=>{
        console.log(res)
      })
      .catch(error=>{
        console.log(error)
      })
    }
    
   console.log(token)
  return (
    <div>
        <Nav/>
        <div className={classes.containers}>
            <SideBar/>
            {
                loading ?
                <MoonLoader color={color} loading={loading} size={50} cssOverride={override} aria-label="Loading Spinner" data-testid="loader"/>:
                <div className={classes.main}>
                  <div>
                    <h3>Join Group</h3>
                    <p>Explore any of our available groups to choose the one that suits your goal</p>
                  </div>
                  <div className={classes.groups}>
                    <div className={classes.miniGroups}>
                      <h3>SILVER GROUP</h3>
                      <ul className={classes.joinUl}>
                        <li>Each member pays: N10,000 monthly for savings duration</li>
                        <li>Savings Target: N1,000,000</li>
                        <li>Savings Duration: 5 months</li>
                      </ul>
                      <button  onClick={createGroup}className={classes.joinbtn}>JOIN</button>
                    </div>
                    <div  className={classes.miniGroups}>
                      <h3>GOLD GROUP</h3>
                      <ul className={classes.joinUl}>
                        <li>Each member pays: N100,000 monthly for savings duration</li>
                        <li>Savings Target: N5,000,000</li>
                        <li>Savings Duration: 5 months</li>
                      </ul>
                      <button className={classes.joinbtn}>JOIN</button>
                    </div>
                    <div  className={classes.miniGroups}>
                    <h3>PLATINUM GROUP</h3>
                    <ul className={classes.joinUl}>
                      <li>Each member pays: N200,000 monthly for savings duration</li>
                      <li>Savings Target: N5,000,000</li>
                      <li>Savings Duration: 5 months</li>
                    </ul>
                    <button className={classes.joinbtn}>JOIN</button>
                    </div>

                  </div>

                </div>
            }

        </div>
    </div>
  )
}

export default JoinGroup