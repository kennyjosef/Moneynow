import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notify = () =>toast('🦄 Wow so easy!', {
  position: "top-center",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
  });
const Id = () => {
  return (
    <div>
     <button onClick={notify}>click me</button>
        <ToastContainer />
    </div>
  )
}

export default Id