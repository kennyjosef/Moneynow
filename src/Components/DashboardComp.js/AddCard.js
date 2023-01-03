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
      <button onClick={handleShow}>Add Bank</button>
    </div>

      <Modal show={show} onHide={handleClose} className="down">
        <Modal.Header closeButton className='color'>
          <Modal.Title>Add Bank</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>Add Your One Time Bank Transfer Account</p>
            <div>
              <label htmlFor="bank">Bank Details</label>
              <select name="banks" id="banks">
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
            </div>
            <div>
              <label htmlFor="accountName">Account Name</label>
              <input type="text" name="accountName" id="accountName" placeholder='David Ade' />
            </div>
        </Modal.Body>
        <Modal.Footer>
          <button  onClick={handleClose}>
            Add Bank
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddCard