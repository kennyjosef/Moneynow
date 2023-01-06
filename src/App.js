import React from "react";
import { Route, Routes } from "react-router-dom";
import ForgetPassword from "./Components/Login/ForgetPassword";
import ForgetPwrdVerify from "./Components/Login/ForgetPwrdVerify";
import ForgetSucces from "./Components/Login/ForgetSucces";
import Login from "./Components/Login/Login";
import NewPassword from "./Components/Login/NewPassword";
import BVN from "./Components/SignUp/BVN";
import Details from "./Components/SignUp/Details";
import Password from "./Components/SignUp/Password";
import SignUp1 from "./Components/SignUp/SignUp1";
import Verify from "./Components/SignUp/Verify";
import Dashboard from "./Pages/Dashboard/Dashboard";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
// import Payment from "./Components/DashboardComp.js/Payment";
import Overview from "./Components/DashboardComp.js/Overview";
import Payment from "./Components/DashboardComp.js/Payment";
import JoinGroup from "./Components/DashboardComp.js/JoinGroup";
import Referal from "./Components/DashboardComp.js/Referal";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="signup" element={<SignUp1/>}/>
        <Route path="verify" element={<Verify/>}/>
        <Route path= "details" element={<Details/>}/>
        <Route path="password" element={<Password/>}/>
        <Route path="bvn" element={<BVN/>}/>
        <Route path="forgetpassword" element={<ForgetPassword/>}/>
        <Route path= 'passwordverify' element={<ForgetPwrdVerify/>}/>
        <Route path= "createnew" element={<NewPassword/>}/>
        <Route path= "passwordset" element={<ForgetSucces/>}/>
        <Route path="dashboard" element={<Dashboard/>}/>
        <Route path ="overview" element={<Overview/>}/>
        <Route path="payment" element={<Payment/>}/>
        <Route path ="joinGroup" element={<JoinGroup/>}/>
        <Route path="referral" element={<Referal/>}/>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;

