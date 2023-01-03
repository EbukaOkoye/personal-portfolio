import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { MailchimpForm } from '../MailChimp/MailChimpForm'
import logo from '../../assets/react.svg'
import { Facebook, Twitter, Whatsapp, Github, Linkedin, Google } from "react-bootstrap-icons";


function Footer() {
  return (
    <footer className='footer'>
        <Container>
            <Row className='align-items-center'>
                <MailchimpForm />

                <Col sm={6}>
                    <img src={logo}  />
                </Col>

                <Col sm={6} className='text-center text-sm-end'>

                    <div className="social-icon">
                    <a href="#"><i className='mx-2'><Facebook /></i></a>
                    <a href="#"><i className='mx-2'><Twitter /></i></a>
                    <a href="#"><i className='mx-2'><Linkedin /></i></a>
                    <a href="#"><i className='mx-2'><Whatsapp /></i></a>
                    <a href="#"><i className='mx-2'><Github /></i></a>
                    <a href="#"><i className='mx-2'><Google /></i></a>
                    
                    </div>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer