import React from 'react'
import { Col } from 'react-bootstrap'

import AOS from 'aos'
import 'aos/dist/aos.css'



const HomePageCard = ({image}) => {
  AOS.init()
  return (
    <Col md={3} className="display-flex" data-aos='zoom-in' >
        <img src={image} width="200" height="200" alt="Alternate"/>
        <h4 className='mt-2'>Title: Feature 1</h4>
        <div>
            <p>Text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati </p>
        </div>
    </Col>
  )
}

export default HomePageCard