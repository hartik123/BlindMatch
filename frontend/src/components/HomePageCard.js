import React from 'react'
import { Col } from 'react-bootstrap'

import dummyImage from '../assets/images/dummy-image.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'



const HomePageCard = ({ele}) => {
  AOS.init()
  return (
    <Col md={3} className="display-flex" data-aos='zoom-in' >
        <img src={ele.img} width="200" height="200"/>
        <h4 className='mt-2'>{ele.title}</h4>
        <div>
            <p>{ele.text}</p>
        </div>
    </Col>
  )
}

export default HomePageCard