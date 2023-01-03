import React from 'react'
import { Col } from 'react-bootstrap'

function ProjectCards({title, description, imgUrl}) {
  return (
    <Col sm={6} md={4}>

        <div className="proj-imgbx">

            <img src={imgUrl} />

            <div className="proj-imgtxtx">

                <h4>{title}</h4>

                <span>{description}</span>
            </div>
        </div>
    
    </Col>
  )
}

export default ProjectCards