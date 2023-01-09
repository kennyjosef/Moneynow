import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import {FaGreaterThan} from 'react-icons/fa'
import {HiThumbUp} from 'react-icons/hi'
import './Modal.css'
function PayoutSucc() {
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
          <Modal.Title>Success</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <HiThumbUp className='thumb'/>
            <p>Your Payout Method has been updated successfully!</p>
           <Link to="/dashboard">
            <button>Continue</button>
           </Link>
          </div>
           
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
export default PayoutSucc

