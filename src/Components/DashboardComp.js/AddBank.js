import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './Modal.css'
function AddBank() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div >
      <div>
        <button onClick={handleShow} >Add Card</button>
      </div>

      <Modal show={show} onHide={handleClose}  className="down">
        <Modal.Header closeButton className='color'>
          <Modal.Title>Add Bank</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Add your card Details</p>
          <div>
            <div>
              <label htmlFor="number">Card Number</label>
              <input type="number" name="number" placeholder='1234 5678 6789 8797' />
            </div>
            <div>
              <label htmlFor="name">Card Holder Name</label>
              <input type="text" name="userName" placeholder=' David Ade' />
            </div>
            <div>
              <div>
                <label htmlFor="expiry">Expiry Date</label>
                <input type="text" name="expiry" placeholder='12/23' />
              </div>
              <div>
                <label htmlFor="cvv">CVV</label>
                <input type="number" name="cvv" placeholder='567' />
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={handleClose}>
            Add Card 
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
export default AddBank

