import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './Modal.css'
function RefPerformance() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div >
      <div>
        <button className="view" onClick={handleShow}>View Referral Performance</button>
      </div>

      <Modal show={show} onHide={handleClose}  className="downy">
        <Modal.Header closeButton className='color'>
          <Modal.Title>Performance</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Total Reward Earned</h5>
          <p>N100.00</p>
          <div className="reward">
            <div>
                <h5>Nicolas</h5>
                <p>Referral Status: successful</p>
                <button className='rewardBtn'>🏆 You've got a reward</button>
            </div>
            <div>
                <h5>Vicoti</h5>
                <p>Referral Status: successful</p>
                <button className='rewardBtn'>🏆 You've got a reward</button>
            </div>
            <div>
                <h5>Santa</h5>
                <p>Referral Status: successful</p>
                <button className='rewardBtn'>🏆 You've got a reward</button>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          {/* <button onClick={handleClose}>
            Add Card 
          </button> */}
        </Modal.Footer>
      </Modal>
    </div>
  );
}
export default RefPerformance

