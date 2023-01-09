import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import {FaGreaterThan} from 'react-icons/fa'
import './Modal.css'
function ConfirmPayOut() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <div >
      <div>
       <FaGreaterThan onClick={()=>{handleShow()}} className="colorme" />
      </div>

      <Modal show={show} onHide={handleClose}  className="down">
        <Modal.Header closeButton className='color'>
          <Modal.Title>Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please Confirm Your Bank Details</p>
          <div>
            <h4>DAVID ADE WILLIAMS</h4>
            <p>0123456789</p>
            <p>Access Bank</p>
            <Link to="/payoutpassword">
            <button className="downbtns">Continue</button>
            </Link>
          </div>
           
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
export default ConfirmPayOut

