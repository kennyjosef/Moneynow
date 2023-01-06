import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import AddPayIn from './AddPayIn';
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
            <>
              {/* <button className='modalbtn'>
                Generate Account
              </button> */}
              <AddPayIn/>
            </>
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