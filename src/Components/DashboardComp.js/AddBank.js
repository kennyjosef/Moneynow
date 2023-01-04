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
          <Modal.Title>Add Your Bank Account!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please add your account’s primary payout method which will  be used to process your withdrawal  <br /></p>
            <form action="">
              <div>
                <input type="text" name="number" placeholder='Account Number' />
              </div>
              {/* <div>
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
              </div> */}
              {/* <button>Add Card</button> */}
            </form>
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

