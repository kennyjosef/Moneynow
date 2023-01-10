import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import './Modal.css'
function AddBank() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div >
      <div>
        <button onClick={handleShow} >Add Bank</button>
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
              <Link to="/addpayout"> 
              <button className='downbtns'>Next</button>
              </Link>
            </form>
        </Modal.Body>
        <Modal.Footer>
      
        </Modal.Footer>
      </Modal>
    </div>
  );
}
export default AddBank

