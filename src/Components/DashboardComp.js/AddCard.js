import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import AddPayIn from './AddPayIn';
// import './Modal/css'
function AddCard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <div>
      <button onClick={handleShow}>Start</button>
    </div>

      <Modal show={show} onHide={handleClose} className="down">
        <Modal.Header closeButton className='color'>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form action="" className='modalform'>
              <div>
                <label htmlFor="firstName">First Name</label>
                <input type="text" name="firstName" id="firstName" placeholder='Enter Your First Name' />
              </div>
              <div>
                <label htmlFor="amount">Amount</label>
                <input type="text" name="amount" id="amount" placeholder='Enter  amount e.g. 100' />
              </div>
              <div>
                <label htmlFor="summary">Summary</label>
                <input type="text" name="summary" id="summary" placeholder='Summarise payment e.g. Platinum summary' />
              </div>
              <div>
                <label htmlFor="phoneNumber">Phone Number</label>
                <input type="tel" name="phoneNumber" id="phoneNumber" placeholder='Enter Your Phone Number' />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" placeholder="abc @gmail.com" />
              </div>
              <div>
                <label htmlFor="currency">Currency</label>
                <input type="tel" name="currency" id="currency" placeholder='Ngn' />
              </div>
              <button className='downbtn'>Submit</button>
            </form>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddCard