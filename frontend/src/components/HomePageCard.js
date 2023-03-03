import React from 'react'
import { Col } from 'react-bootstrap'

import dummyImage from '../assets/images/dummy-image.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'



const HomePageCard = () => {
  AOS.init()
  return (
    <Col md={4} className="display-flex" data-aos='zoom-in' >
        <img src={dummyImage} width="200" height="200"/>
        <h4 className='mt-2'>Title: Feature 1</h4>
        <div>
            <p>Text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati </p>
        </div>
    </Col>
  )
}

export default HomePageCard