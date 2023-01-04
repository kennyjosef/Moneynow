import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import './Modal/css'
function AddCard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <div>
      <button onClick={handleShow}>Continue</button>
    </div>

      <Modal show={show} onHide={handleClose} className="down">
        <Modal.Header closeButton className='color'>
          <Modal.Title>One-Time Bank Transfer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>Kindly Generate Your One-time Bank Transfer Account</p>
            <h5>How it works</h5>
            <div>
              <p>1. This account number can only be used once</p>
              <p>2. This account number is not to be saved for future use</p>
            </div>
            {/* <form action="">
              <label htmlFor="bank">Bank Details</label>
              <select name="banks" id="banks" className='selectOption'>
                <option value="access">Access Bank plc</option>
                <option value="first">Frst Bank plc</option>
                <option value="polaris">Polaris Bank plc</option>
                <option value="wema">Wema Bank plc</option>
                <option value="gtb">GTBank plc</option>
                <option value="sterlin">Sterlin Bank plc</option>
                <option value="lafenda">Lafenda Mircrofinance Bank plc</option>
                <option value="mortage">Mortage Bank plc</option>
                <option value="union">Union Bank </option>
                <option value="fcmb">FCMB</option>
                <option value="palm">Palm pay</option>
              </select>
              <div>
              <label htmlFor="accountName">Account Name</label>
              <input type="text" name="accountName" id="accountName" placeholder='David Ade' />
             </div>
            </form> */}
          <button className='modalbtn'>
            Generate Account
          </button>
        </Modal.Body>
        <Modal.Footer>
          {/* <button  onClick={handleClose}>
            Generate Account
          </button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddCard