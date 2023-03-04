import React from "react";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

const ModalComponent = (props) => {

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          OTP
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <center>
        <b>Enter OTP: </b>
        <input type="text" maxLength={4}/>
        </center>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Submit</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalComponent;
