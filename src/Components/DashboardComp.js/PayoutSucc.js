import React, { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import {FaGreaterThan} from 'react-icons/fa'
import {HiThumbUp} from 'react-icons/hi'
import './Modal.css'
import MoonLoader from "react-spinners/MoonLoader";

function PayoutSucc() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [loading, setLoading]=useState(false)
  let [color, setColor] = useState(" rgb(238, 88, 238)");
  const override  = {
    display: "block",
    borderColor: "rgb(238, 88, 238)",
  };
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    }, 3000)

  },[])

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
          <div className="moveme">
            {
              loading ?
              <MoonLoader color={color} loading={loading} size={50} cssOverride={override} aria-label="Loading Spinner" data-testid="loader"/>:
              <HiThumbUp className='thumb'/>
            }
            <p>Your Payout Method has been updated successfully!</p>
           <Link to="/dashboard">
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
export default PayoutSucc

