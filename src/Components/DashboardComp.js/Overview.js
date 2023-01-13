import React, { useEffect, useState } from "react";
import "./Overview.css";
import eye from "../../Assets/eyeopened.svg";
import axios from "axios";
import Transaction from "./Transaction";


const Overview = () => {
  const [show, setShow]=useState(true)
  const [balance, setBalance]= useState("")
  const [transactionEvent, setTransactionEvent]= useState([])
  const [transactionMade, setTransactionMade] = useState(0)
  const [loading, setLoading]= useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [postPerPage, setPostPerPage] = useState(10)
  const url="https://moneynow.onrender.com/api/userbalance"
  const transaction ="https://moneynow.onrender.com/transaction/usertransaction"
  const token= localStorage.getItem("token")
  const getUserBalance=()=>{
    axios.get(url, 
      {headers:{authorization:`Bearer ${token}`}})
    .then(res=>{
      setBalance(res.data.balance)
    })
    .catch(error=>{
      console.log(error)
    })
  }
  getUserBalance();
  useEffect(()=>{
  const getTransaction= ()=>{
    setLoading(true)
    axios.get(transaction,
      {headers:{authorization:`Bearer ${token}`}})
      .then(res=>{
        console.log("Transacttion is", res)
        setTransactionEvent(res.data.userTransactions)
        setTransactionMade(res.data.allTransactions)
        setLoading(false)
      })
      .catch(error=>{
        console.log(error)
      })
  }
    getTransaction()
  },[])
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
      <div className="father">
          <p>Transaction Type</p>
          <p>Amount</p>
          <p>Date & Time</p>
          <p>Status</p>
      </div>
        <div>
         
          {
            transactionEvent.map(items=>(
              <Transaction  amount={items.amount.$numberDecimal} 
              status={items.transactionStatus} 
              date={items.createdAt}
              type={items.purpose}
              key={items.id}/>
            )
            )
          }
        </div>
      </div>
      {/* <button onClick={getTransaction}>get transaction</button> */}
    </div>
  );
};

export default Overview;

