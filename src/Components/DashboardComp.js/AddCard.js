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
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
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