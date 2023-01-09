import React from 'react'
import Nav from './Nav'
import PayoutSucc from './PayoutSucc'
const PayoutPassword = () => {
  return (
    <div>
        <Nav/>
        <div className="containers">
            <h3>Confirmation</h3>
            <p>Please Input Your MoneyNow Password to Complete  the Update</p>
            <p>Input Your MoneyNow Password</p>
            <form action="">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" placeholder='Enter your password' />
                <div className="addbtn" >
                <button>Add Password</button>
                </div>
            </form>
            <div>
            <PayoutSucc/>
            </div>
        </div>

    </div>
  )
}

export default PayoutPassword