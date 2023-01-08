import React, { useState } from "react";
import "./Overview.css";
import eye from "../../Assets/eyeopened.svg";

const Overview = () => {
  const [show, setShow]=useState(true)
  return (
    <div className="overview back">
      {/* <h2 className="header">Overview</h2> */}
      <div className="balancegroup">
        <div className="balance wrapper">
          <div className="seeMe">
          <h5>Total Balance</h5>
          <img onClick={()=>setShow(!show)}src={eye} alt="eye" />
          </div>
          {/* <h2> ₦ {localStorage.getItem("balance")}</h2> */}
          {show && <h2> ₦4000.00</h2>}
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
    </div>
  );
};

export default Overview;
