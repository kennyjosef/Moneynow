import React, { useEffect, useState } from "react";
import "./Overview.css";
import eye from "../../Assets/eyeopened.svg";
import axios from "axios";


const Overview = () => {
  const [show, setShow]=useState(true)
  const [balance, setBalance]= useState("")
  const [transactionEvent, setTransactionEvent]= useState()
  const url="https://moneynow.onrender.com/api/userbalance"
  const transaction ="https://moneynow.onrender.com/transaction/usertransaction"
  const token= localStorage.getItem("token")
  const getUserBalance=()=>{
    axios.get(url, 
      {headers:{authorization:`Bearer ${token}`}})
    .then(res=>{
      console.log(res.data)
      setBalance(res.data.balance)
    })
    .catch(error=>{
      console.log(error)
    })
  }
  getUserBalance();
  // const getTransaction= ()=>{
  //   axios.get(transaction,
  //     {headers:{authorization:`Bearer ${token}`}})
  //     .then(res=>{
  //       console.log(res)
  //       setTransactionEvent(res.data)
  //     })
  //     .catch(error=>{
  //       console.log(error)
  //     })
  // }
  // getTransaction()
  console.log(transactionEvent)
  return (
    <div className="overview back">
      <div className="balancegroup">
        <div className="balance wrapper">
          <div className="seeMe">
          <h5>Total Balance</h5>
          <img onClick={()=>setShow(!show)}src={eye} alt="eye" />
          </div>
          {show && <h2>{`₦ ${balance} .00`} </h2>}
        </div>
        <div className="group wrapper">
            <h5>Your Groups</h5>
            <h6>You have no group yet</h6>
        </div>
      </div>
      <div className="tableContainer">
      <p>Transaction History</p>
      <table>
        <tr>
          <th>Transaction Type</th>
          <th>Amount</th>
          <th>Date & Time</th>
          <th>Status</th>
        </tr>
        <tr>
          <td>Funding</td>
          <td>₦ 1000.00</td>
          <td>Dec. 20, 2021 7:30 AM</td>
          <td className="processing">Pending</td>
        </tr>
        <tr>
          <td>Withdrawal</td>
          <td>₦ 200.00</td>
          <td>Dec. 20, 2021 7:30 AM</td>
          <td className="success">Success</td>
        </tr>
        <tr>
          <td>Withdrawal</td>
          <td>₦ 300.00</td>
          <td>Dec. 20, 2021 7:30 AM</td>
          <td className="failed">Failed</td>
        </tr>
        <tr>
          <td>Withdrawal</td>
          <td>₦ 500.00</td>
          <td>Dec. 20, 2021 7:30 AM</td>
          <td className="success">Success</td>
        </tr>
        <tr>
          <td>Funding</td>
          <td>₦ 1000.00</td>
          <td>Dec. 20, 2021 7:30 AM</td>
          <td className="processing">Pending</td>
        </tr>
      </table>
      </div>
      {/* <button onClick={getTransaction}>get transaction</button> */}
    </div>
  );
};

export default Overview;
