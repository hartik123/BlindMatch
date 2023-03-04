import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { message } from 'antd'
import { verify } from "../apicalls/users";
import { useNavigate } from "react-router-dom";

const ModalComponent = (props) => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState();
  const getVerified = async(payload) => {
    try{
      const response = await verify(payload);
      console.log(payload)
      if(response.success){
        message.success(response.message)
        props.setUserId('')
        setOtp()
        navigate("/login")
      }
      else{
        message.error(response.message)
        props.setUserId('')
        setOtp()
      }
    }
    catch(error){
      message.error(error.message)
      props.setUserId('')
      setOtp()
    }
  }
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
        <input type="number" maxLength={4} value={otp} onChange={(e)=>setOtp(Number(e.target.value))}/>
        </center>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={()=>{
          getVerified({
            newUserId: props.userId,
            otp: otp
          })
          console.log(props.userId)
        }}>Submit</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalComponent;
