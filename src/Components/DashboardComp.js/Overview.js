import React from "react";
import "./Overview.css";
import eye from "../../Assets/eyeopened.svg";

const Overview = () => {
  return (
    <div className="overview back">
      {/* <h2 className="header">Overview</h2> */}
      <div className="balancegroup">
        <div className="balance wrapper">
          <h5>
            Total Balance <img src={eye} alt="eye" />
          </h5>
          <h2>$4000.00</h2>
        </div>
        <div className="group wrapper">
            <h5>Your Groups</h5>
            <h6>You have no group yet</h6>
        </div>
      </div>
       <div className="transaction-container">
        <h6 className="transheader">Transaction History</h6>
        <div className="tableheader">
            <p className="ttype">Transaction type</p>
            <p className="amount">Amount</p> 
            <p className="dandt">Date & time</p>
            <p className="status">Status</p>
        </div>
        <div className="trans" id="trans-1">
            <p className="ttype funwit">Funding</p>
            <p className="amount green"> $432.9</p>
            <p className="dandt">December 20, 2021 7:30 AM</p>
            <p className="status"><span className="processing">Processing</span></p>
        </div>
        <div className="trans" id="trans-2">
            <p className="ttype funwit">Funding</p>
            <p className="amount green"> $432.9</p>
            <p className="dandt">December 20, 2021 7:30 AM</p>
            <p className="status"><span className="success">Success</span></p>
        </div>
        <div className="trans" id="trans-3">
            <h6 className="ttype funwit">Withdrawal</h6>
            <h6 className="amount error"> $3000</h6>
            <h6 className="dandt">December 20, 2021 7:30 AM</h6>
            <h6 className="status"><span className="failed">Failed</span></h6>
        </div>
        <div className="trans" id="trans-4">
            <h6 className="ttype funwit">Funding</h6>
            <h6 className="amount green"> $432.9</h6>
            <h6 className="dandt">December 20, 2021 7:30 AM</h6>
            <h6 className="status "><span className="success">Success</span></h6>
        </div>
        <div className="trans" id="trans-5">
            <h6 className="ttype funwit">Withdrawal</h6>
            <h6 className="amount error"> $450.6</h6>
            <h6 className="dandt">December 20, 2021 7:30 AM</h6>
            <h6 className="status"><span className="failed">failed</span></h6>
        </div>
        <div className="trans" id="trans-5">
            <h6 className="ttype funwit">Withdrawal</h6>
            <h6 className="amount error"> $450.6</h6>
            <h6 className="dandt">December 20, 2021 7:30 AM</h6>
            <h6 className="status"><span className="failed">failed</span></h6>
        </div>
        <div className="trans" id="trans-5">
            <h6 className="ttype funwit">Withdrawal</h6>
            <h6 className="amount error"> $450.6</h6>
            <h6 className="dandt">December 20, 2021 7:30 AM</h6>
            <h6 className="status"><span className="failed">failed</span></h6>
        </div>
        <div className="trans" id="trans-5">
            <h6 className="ttype funwit">Withdrawal</h6>
            <h6 className="amount error"> $450.6</h6>
            <h6 className="dandt">December 20, 2021 7:30 AM</h6>
            <h6 className="status"><span className="success">failed</span></h6>
        </div>
      </div> 
    </div>
  );
};

export default Overview;
