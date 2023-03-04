import React,{useState} from "react";
import { Container, Col, Row, Form, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { login } from "../apicalls/users";
import { message } from "antd"
import { useSelector, useDispatch } from 'react-redux';
import { HideLoading, ShowLoading } from '../redux/loadersSlice';
import loginSideImage from "../assets/images/loginSideImage.jpg";
import AOS from 'aos'
import 'aos/dist/aos.css'


const LoginPage = () => {
  AOS.init();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // const [toast, setToast] = useState(false)
  // const [toastText, setToastText] = useState('')
  const dispatch = useDispatch()
  const submitHandler = async(e) =>{
    try {
    // setToastText("✅ Logged In Successfully")
    // setToast(true)
    // console.log("Login Details:  ", {userName, password})
    e.preventDefault()
    dispatch(ShowLoading())
    const response = await login({email, password})
    dispatch(HideLoading())
      if(response.success){
        // setToastText("✅ Logged In Successfully")
        message.success(response.message)
        localStorage.setItem('token', response.data)
        window.location.href = '/home'
      }
      else{
        // setToastText(response.message)
        message.error(response.message)
      }
    } catch (error) {
      // setToastText(error.message)
      dispatch(HideLoading())
      message.error(error.message)
    }
  }


  return (
    <Container
      className="d-flex align-items-center"
      style={{ minHeight: "80vh", alignContent: "center" }}
    >
      {/* {toast && <ToastComponent  toastText={toastText}/>} */}
      <Row gap={16} className="d-flex align-items-center py-auto">
        <Col md={6} data-aos="fade-right">
          <img src={loginSideImage} alt="loginSideImage" width={"90%"} />
        </Col>
        <Col md={6} data-aos="fade-left">
          <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" value={email} required={true} onChange={(e)=>setEmail(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" value={password} required={true} onChange={(e)=>setPassword(e.target.value)}/>
            </Form.Group>

            <Row>
              <Col md={6}>
                <Button variant="success" type="submit" size="lg">
                  Log in
                </Button>
              </Col>
              <Col md={6}>
                <LinkContainer to="/signup">
                  <div className="login-signup cursor-pointer mt-2" >Not a member? Register here. </div>
                </LinkContainer>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
