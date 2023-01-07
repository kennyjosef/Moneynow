import React, {useState, useEffect} from "react";
import Logo2 from "../../Assets/profile.svg"
import Logo1 from "../../Assets/notification.svg"
import Logo3 from "../../Assets/arrowdown.svg"
import "./Nav.css";
import { Link } from "react-router-dom";
import Home from "../../Assets/home.svg"
import Group from "../../Assets/lefticon.svg"
import Atm from "../../Assets/atm.svg"
import More from "../../Assets/more.svg"
import Referral from "../../Assets/referral.svg"
import logout from "../../Assets/logout.svg"
import axios from "axios";
const Nav = () => {
  const [toggle, setToggle] = useState(true)

    function handleClick(){
        return setToggle(preToggle=> !preToggle)
    }
    const getUserName = () =>  {
      axios.get(`https://moneynow.onrender.com/api/username?id=${localStorage.getItem("userID")}`)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
    }
    getUserName()
  return (
    <div className='navbar'>
      <div className='forul'>
        <ul className={toggle? ' ul' : 'navShow'}>
          <div className="flex"><Link  to="/dashboard"><img src={Home} alt="home" /><p>Overview</p></Link></div>
          <div className="flex"><Link  to="/joinGroup"><img src={Group} alt="group" /><p>Join Group</p> </Link></div>
          <div className="flex"><Link  to="/payment"><img src={Atm} alt="atm" /><p>Payment</p></Link></div>
          <div className="flex"><Link  to="/referral"><img src={Referral} alt="referral" /><p>Referral</p></Link></div>
          <div className="flex"><Link  to="#"><img src={More} alt="more" /><p>More</p></Link></div>
          <div className="flex"><Link  to="#"><img src={logout} alt="out" /><p>Sign out</p></Link></div>

        <div className='hamburger' onClick={handleClick}> 
          {toggle?<span>&#9776;</span>:<span>&times;</span>}
        </div>
        </ul>
      </div>
      <div className="david">
        <img className='icon1' src={Logo1} alt="notification" />
        <span className='divider'></span>
        <img className='icon2' src={Logo2} alt="profile" />
        <h5>{localStorage.getItem('username')}</h5>
        {
          
        }
        <img className='icon3' src={Logo3} alt="arrow-down" />
      </div>
    </div>
  );
};

export default Nav;
