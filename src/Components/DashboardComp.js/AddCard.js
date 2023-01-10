import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function AddCard() {
  const token= localStorage.getItem("token")
  const navigate = useNavigate()

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [errorMessage, setErrorMessage] = useState({})
  const [isSubmit, setIstSubmit] = useState (false)
  const [data, setDate]=useState({
    firstName:"",
    amount:"",
    phoneNumber:"",
    currency:"",
    email:"",
    summary:""
  })
  function handle(e){
    const newData={...data}
    newData[e.target.id]=e.target.value
    setDate(newData)
    console.log(newData)
  }
  function submit (e){
    e.preventDefault()
    axios.post('https://moneynow.onrender.com/transaction/save',{
      firstName: data.firstName,
      amount: data.amount,
      phoneNumber: data.phoneNumber,
      currency: data.currency,
      email: data.email,
      summary: data.summary
    },
    {headers:{authorization:`Bearer ${token}`}})
    
    .then(res=>{
      console.log(res)
      localStorage.setItem("link", res.data.response.data.link)
      navigate('/flutterpay')
    })
   
    .catch(error=>{
      console.log(error)
    })
  }

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
            <form action="" className='modalform' onSubmit={(e)=> submit(e)}>
              <div>
                <label htmlFor="firstName">First Name</label>
                <input type="text" name="firstName"  onChange={(e)=>handle(e)} id="firstName" placeholder='Enter Your First Name' />
              </div>
              <div>
                <label htmlFor="amount">Amount</label>
                <input type="text" name="amount" id="amount" onChange={(e)=>handle(e)}  placeholder='Enter  amount e.g. 100' />
              </div>
              <div>
                <label htmlFor="summary">Summary</label>
                <input type="text" name="summary" id="summary" onChange={(e)=>handle(e)}  placeholder='Summarise payment e.g. Platinum summary' />
              </div>
              <div>
                <label htmlFor="phoneNumber">Phone Number</label>
                <input type="tel" name="phoneNumber" onChange={(e)=>handle(e)}  id="phoneNumber" placeholder='Enter Your Phone Number' />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email"onChange={(e)=>handle(e)}   placeholder="abc @gmail.com" />
              </div>
              <div>
                <label htmlFor="currency">Currency</label>
                <input type="text" name="currency" id="currency" onChange={(e)=>handle(e)} placeholder='Ngn' />
              </div>
              <button  className='downbtn'>Submit</button>
            </form>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddCard