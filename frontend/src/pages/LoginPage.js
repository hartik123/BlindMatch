import React,{useState} from "react";
import { Container, Col, Row, Form, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { login } from "../apicalls/users";
import loginSideImage from "../assets/images/loginSideImage.jpg";
import ToastComponent from "../components/ToastComponent";

const LoginPage = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [toast, setToast] = useState(false)
  const [toastText, setToastText] = useState('')

  const submitHandler = async(e) =>{
    try {
      e.preventDefault()
    // setToastText("✅ Logged In Successfully")
    // setToast(true)
    // console.log("Login Details:  ", {userName, password})

    const response = await login({email, password})
    console.log(response.data)
      if(response.success){
        setToastText("✅ Logged In Successfully")
        localStorage.setItem('token', response.data)
        window.location.href = '/home'
      }
      else{
        setToastText(response.message)
      }
      
      
    } catch (error) {
      setToastText(error.message)
      
    }
  }


  return (
    <Container
      className="d-flex align-items-center"
      style={{ minHeight: "80vh", alignContent: "center" }}
    >
      {toast && <ToastComponent  toastText={toastText}/>}
      <Row gap={16} className="d-flex align-items-center py-auto">
        <Col md={6}>
          <img src={loginSideImage} alt="loginSideImage" width={"90%"} />
        </Col>
        <Col md={6}>
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
