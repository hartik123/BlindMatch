import React from 'react'
import {Spinner} from 'react-bootstrap'
function Loaders() {
  return (
    <Spinner animation="border" role="status" className='wh-80'>
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  )
}

export default Loaders
