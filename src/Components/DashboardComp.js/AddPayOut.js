import React from 'react'
import './Modal.css'
import Nav from './Nav'
const AddPayOut = () => {
  return (
    <div>
      <Nav/>
      <div className="containers">
        <h3>Add Bank</h3>
        <form action="">
          <p>Kindly  Pick Your Bank</p>
          <select name="bank" id="bank">
            <option value="access">Access Bank PLC</option>
            <option value="ecobank">EcoBank Nigeria PLC</option>
            <option value="fidelity">Fidelity Bank PLC</option>
            <option value="gtb">Guarantee Trust Bank</option>
            <option value="gtmobile">GT Mobile</option>
            <option value="heritage">Heritage Bank</option>
            <option value="union">Union Bank</option>
            <option value="first">First Bank PLC</option>
            <option value="polaris">Polaris</option>
            <option value="keystone">Keystone Bank PLC</option>
            <option value="kuda">Kuda Microfinance Bank</option>
            <option value="moniepoint">Moniepoint Microfinance Bank</option>
            <option value="providus">Providus Bank PLC</option>
            <option value="sterling">Sterling Bank PLC</option>
            <option value="wema">Wema Bank PLC</option>
            <option value="fcmb">FCMB Bank PLC</option>
            <option value="zenith">Zenith Bank PLC</option>
          </select>
          <div className="addbtn">
            <button>Continue</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddPayOut