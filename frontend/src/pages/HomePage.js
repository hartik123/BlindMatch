import React from 'react'
import { Container } from 'react-bootstrap'
import Index from '../components/Index'

const HomePage = (props) => {
  return (
    <Container className="mt-3" >
      <div style={{minHeight:"80vh"}}>
        <Index />
      </div>
    </Container>
  )
}

export default HomePage