import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Facebook, Twitter, Whatsapp, Github, Linkedin, Google } from "react-bootstrap-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import logo from '../../assets/react.svg'







function Navigation() {

    const [activeLink, setActiveLink] = useState('')
    const [scrolled, setScrolled] = useState(false)

    useEffect( () => {
        const onScrolled = () => {

            if(window.scrollY > 50) {
                setScrolled(true)
    
            } else {
                setScrolled(false)
            }
        }

        window.addEventListener('scroll', onScrolled)


        return () => window.removeEventListener('scroll', onScrolled)
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value)
    }










  return (
    
    <Navbar bg="light" expand="lg" className={scrolled ? 'scrolled' : ''} >
        <Container>

            <Navbar.Brand href="#home">
                <img src={logo} alt="logo" />
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" > 
                <span className='navbar-toggler-icon'></span>
            </Navbar.Toggle>

            <Navbar.Collapse id="basic-navbar-nav">

            <Nav className="me-auto">

                    <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                    <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                    <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                    
            </Nav>

            <span className="navbar-text">
                <div className="social-icon">
                    <a href="https://www.facebook.com/ifenna.okoye.167"><i className='mx-2'><Facebook /></i></a>
                    <a href="https://twitter.com/NawtiNerd_19"><i className='mx-2'><Twitter /></i></a>
                    <a href="https://www.linkedin.com/in/chukwuebuka-okoye-967867229"><i className='mx-2'><Linkedin /></i></a>
                    <a href="https://wa.me/qr/CBW3HAWG3XQGO1"><i className='mx-2'><Whatsapp /></i></a>
                    <a href="https://github.com/EbukaOkoye"><i className='mx-2'><Github /></i></a>
                    
                </div>

                <button className='btn btn-outline-dark'  onClick={() => {
                console.log('clicked')
                }}>Let's connect</button>

            </span>

            
            </Navbar.Collapse>
        </Container>
    </Navbar>
    
  );
}


export default Navigation