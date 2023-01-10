import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {FiShare} from 'react-icons/fi'
import './Modal.css'

import {
    EmailIcon,
    EmailShareButton,
    FacebookIcon,
    FacebookShareButton,
    LinkedinIcon,
    LinkedinShareButton,
    TelegramIcon,
    TelegramShareButton,
    TwitterIcon,
    TwitterShareButton,
    WhatsappIcon,
    WhatsappShareButton
  } from "react-share";


function SocialMedia() {
    const shareUrl='https://facebook.com'
    const shareUrlEmial='https://facebook.com'
    const shareUrlLinked='https://linkedin.com'
    

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div variant="primary" onClick={handleShow}>
      <FiShare/>
      </div>

      <Modal show={show} onHide={handleClose} animation={true} className="downnw">
        <Modal.Header closeButton>
          <Modal.Title>Copy and Share your referal code</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="sharenw">
        <FacebookShareButton url={shareUrl}>
            <FacebookIcon size={40} borderRadius={50}/>
        </FacebookShareButton>
        <EmailShareButton url={shareUrlEmial}>
            <EmailIcon size={40} borderRadius={50}/>
        </EmailShareButton>
        <WhatsappShareButton>
            <WhatsappIcon size={40} borderRadius={50}/>
        </WhatsappShareButton>
        <LinkedinShareButton url={shareUrlLinked}>
            <LinkedinIcon size={40} borderRadius={50}/>
        </LinkedinShareButton>
        <TwitterShareButton>
            <TwitterIcon size={40} borderRadius={50} />
        </TwitterShareButton>
        <TelegramShareButton>
            <TelegramIcon size={40} borderRadius={50}/>
        </TelegramShareButton>
        </div>

        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SocialMedia;
  