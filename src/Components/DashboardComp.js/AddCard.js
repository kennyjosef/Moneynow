import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
function AddCard() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [initialValues, setInitialValues]=useState({firstName:"",amount: "",summary: "",phoneNumber: "",email: "",currency: ""})
  const [formValues, setFormValues] = useState(initialValues)
  const handleChange= (e)=>{
    const {name, value} =e.target
    setFormValues({...formValues, [name]:value})
    console.log(formValues)
}
  const handleSubmit= (e)=>{
    e.preventDefault()
    axios.post("https://moneynow.onrender.com/transaction/save", formValues)
    .then(res=>{
      console.log(res)
      // setFormValues(formValues)
    })
    .catch(error=>{
      console.log(error)
    })
  }
console.log("form inputs", formValues)

  return (
    <>
    <div>
      <button onClick={handleShow}>Start</button>
    </div>

      <Modal show={show} onHide={handleClose} className="down">
        <Modal.Header closeButton className='color'>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form action="" className='modalform'>
              <div>
                <label htmlFor="firstName">First Name</label>
                <input type="text" name="firstName"  onChange={handleChange}value={formValues.firstName} id="firstName" placeholder='Enter Your First Name' />
              </div>
              <div>
                <label htmlFor="amount">Amount</label>
                <input type="text" name="amount" id="amount" onChange={handleChange} value={formValues.amount} placeholder='Enter  amount e.g. 100' />
              </div>
              <div>
                <label htmlFor="summary">Summary</label>
                <input type="text" name="summary" id="summary" onChange={handleChange} value={formValues.summary} placeholder='Summarise payment e.g. Platinum summary' />
              </div>
              <div>
                <label htmlFor="phoneNumber">Phone Number</label>
                <input type="tel" name="phoneNumber" onChange={handleChange} value={formValues.phoneNumber} id="phoneNumber" placeholder='Enter Your Phone Number' />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email"onChange={handleChange}  value={formValues.email} placeholder="abc @gmail.com" />
              </div>
              <div>
                <label htmlFor="currency">Currency</label>
                <input type="tel" name="currency" id="currency" onChange={handleChange} value={formValues.currency} placeholder='Ngn' />
              </div>
              <button  onClick={handleSubmit} className='downbtn'>Submit</button>
            </form>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddCard