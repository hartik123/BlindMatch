import React,{useState} from 'react'
import { ToastContainer, Toast } from 'react-bootstrap'

const ToastComponent = ({toastText}) => {

    const [toast, setToast] = useState(true)

  return (
    <ToastContainer className="p-3" position={"top-center"}>
          <Toast onClose={() => setToast(false)} show={toast} delay={3000} autohide>
            <Toast.Body>{toastText}</Toast.Body>
          </Toast>
        </ToastContainer>
  )
}

export default ToastComponent