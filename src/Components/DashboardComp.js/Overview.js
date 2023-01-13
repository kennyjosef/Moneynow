import React, { useEffect, useState } from "react";
import "./Overview.css";
import eye from "../../Assets/eyeopened.svg";
import axios from "axios";
import _ from 'lodash';
import ScaleLoader from 'react-spinners/ScaleLoader'

const Overview = () => {
  const [show, setShow]=useState(true)
  const [balance, setBalance]= useState("")
  const [transactionEvent, setTransactionEvent]= useState([])
  const [transactionMade, setTransactionMade] = useState(0)
  const [loading, setLoading]= useState(false)
  const [paginated,setPaginated]= useState()
  const pageSize= 10
  const [currentPage, setCurrentPage] = useState(1)
  let [color, setColor] = useState(" rgb(238, 88, 238)");
  const override  = {
    display: "block",
    borderColor: "rgb(238, 88, 238)",
  };
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
            setPaginated(_ (res.data.userTransactions).slice(0).take(pageSize).value())
            setLoading(false)
          })
          .catch(error=>{
            console.log(error)
          })
        }
        getTransaction()
      },[])
      const pageCount= transactionEvent?Math.ceil(transactionEvent.length/pageSize):0;
      const pages= _.range(1, pageCount+1)
      const pagination=(pageNo)=>{
        setCurrentPage(pageNo)
        const startIndex=(pageNo-1)*pageSize
        const paginated = _ (transactionEvent).slice(startIndex).take(pageSize).value();
        setPaginated(paginated)
      }
  console.log("transaction event", transactionEvent)
  return (
    <div className="overview back">
      <div className="balancegroup">
        <div className="balance wrapper">
          <div className="seeMe">
          <h5>Total Balance</h5>
          <img onClick={()=>setShow(!show)}src={eye} alt="eye" />
          </div>
          <>
          {
            loading ?
            <ScaleLoader color={color} loading={loading}size={40} cssOverride={override} aria-label="Loading Spinner" data-testid="loader"/>
            :
            <>
            {show && <h2>{`₦ ${balance} .00`} </h2>}
            </>
          }
          </>
        </div>
        <div className="group wrapper">
            <h5>Your Groups</h5>
            <h6>You have no group yet</h6>
        </div>
      </div>
      <div className="tableContainer">
      <p className="transme">Transaction History <span>{transactionMade}</span></p>
           {
            loading ?
            <ScaleLoader color={color} loading={loading}size={40} cssOverride={override} aria-label="Loading Spinner" data-testid="loader"/>
            :
            <>
           <table className="table">
              <thead>
                <tr>
                  <th>Transaction Type</th>
                  <th>Amount</th>
                  <th>Date & Time</th>
                  <th>Status</th>
                </tr>
                </thead>
                <tbody>
                  {
                    paginated?.map(items=> <tr key={items.id}>
                      <td>{items.purpose}</td>
                      <td>{items.amount.$numberDecimal}</td>
                      <td>{items.createdAt}</td>
                      <td>{items.transactionStatus}</td>
                    </tr>)
                  }

                </tbody>
           </table>
          <nav className="d-flex justify-content-center">
            <ul className="pagination">
              {
                pages.map((page)=>(
                  
                  <li className={page=== currentPage? "page-item active": "page-item"}>
                    <p className="page-link" onClick={()=>pagination(page)}>{page}</p>
                  </li>
                ))
              }
            </ul>
          </nav>
            </>
           }
            
      </div>
    </div>
  );
};

export default Overview;

