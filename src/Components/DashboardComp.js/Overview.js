import React, { useEffect, useState } from "react";
import "./Overview.css";
import eye from "../../Assets/eyeopened.svg";
import axios from "axios";
import AllGroup from "./AllGroup";


const Overview = () => {
  const [show, setShow]=useState(true)
  const [balance, setBalance]= useState("")
  const [transactionEvent, setTransactionEvent]= useState("")
  const [transactType, setTransactType]=useState('')
  const [amount, setAmount]= useState("")
  const [status, setStatus]= useState("")
  const [date, setDate]= useState("")
  const [transactionMade, setTransactionMade] = useState(0)
  const url="https://moneynow.onrender.com/api/userbalance"
  const transaction ="https://moneynow.onrender.com/transaction/usertransaction"
  const token= localStorage.getItem("token")
  const getUserBalance=()=>{
    axios.get(url, 
      {headers:{authorization:`Bearer ${token}`}})
    .then(res=>{
      // console.log(res.data)
      setBalance(res.data.balance)
    })
    .catch(error=>{
      // console.log(error)
    })
  }
  getUserBalance();
  const getTransaction= ()=>{
    axios.get(transaction,
      {headers:{authorization:`Bearer ${token}`}})
      .then(res=>{
        console.log("Transacttion is", res)
        setTransactionEvent(res.data.userTransactions)
        setTransactionMade(res.data.allTransactions)
      })
      .catch(error=>{
        console.log(error)
      })
  }
  getTransaction()
  console.log("transaction event", transactionEvent)
  // console.log(transactionMade)
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
      <p>Transaction History <span>{transactionMade}</span></p>
      <table>
        <tr>
          <th>Transaction Type</th>
          <th>Amount</th>
          <th>Date & Time</th>
          <th>Status</th>
        </tr>
        <div>
         
          {/* {
            transactionEvent.map(items=>{(
              <AllGroup  amount={items.amount} status={items.transactionStatus} key={items.id}/>
            )
            })
          } */}
        </div>
      </table>
      </div>
      {/* <button onClick={getTransaction}>get transaction</button> */}
    </div>
  );
};

export default Overview;
