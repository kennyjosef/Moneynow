import React from 'react'
import ButtonDash from '../Button/ButtonDash'

const Payment = () => {
  return (
    <div>
        <div>
            <h3>HELLO VICTOR!</h3>
            <p>Add Your Preferred  Payment Method </p>
        </div>
        <div>
            <h4>Choose Your Primary Payment Method</h4>
            <p>Please add your account’s primary payment method which will be used to pay for your contributions . Don’t worry, you can always change this later</p>
            <p>Select a Payment Method</p>
            <div>
                <div></div>
                <div>
                    <ButtonDash name="Add"/>
                </div>
            </div>
            <div></div>

        </div>
    </div>
  )
}

export default Payment