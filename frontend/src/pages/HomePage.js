import React from 'react'
import { Container } from 'react-bootstrap'
import Index from '../components/Index'

const HomePage = () => {
  return (
    <Container>
      <div style={{minHeight:"80vh"}}>
        <Index />
      </div>
    </Container>
  )
}

export default HomePage