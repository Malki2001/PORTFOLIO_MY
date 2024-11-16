import React from 'react'
import { useState, useEffect } from 'react'
import { Navbar, Container,Nav } from 'react-bootstrap'
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'

function NavBar() {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            }
            else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink =(value)=>{
        setActiveLink(value);

    }

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>

                <Navbar.Brand href="#home">
                    {/* <img src={logo} alt='Logo' /> */}
                    <h3 className='logo-name'>Portfolio</h3>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" >
                    <span className='navbar-toggle-icon'></span>
                </Navbar.Toggle>

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                      
                        <Nav.Link href="#home" className={activeLink === 'homes' ? 'active-navbar-link' : "navbar-link"} onClick={() => onUpdateActiveLink('home')} >Home</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active-navbar-link' : "navbar-link"} onClick={() => onUpdateActiveLink('skills')} >Skills</Nav.Link>
                        <Nav.Link href="#project" className={activeLink === 'project' ? 'active-navbar-link' : "navbar-link"} onClick={() => onUpdateActiveLink('project')} >Projects</Nav.Link>
                    </Nav>
                    <span className='navbar-text'>
                        <div className="social-icon">
                            <a href='https://www.linkedin.com/in/malki-yasodhara-b3194122b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'><img src={navIcon1} alt='LinkedIn' /></a>
                            <a href='https://github.com/Malki2001'><img src={navIcon2} alt=' Facebook' /></a>
                            <a href='https://www.instagram.com/malki_yasodhara?igsh=dmFzaWRsZjludXo0'><img src={navIcon3} alt='Instagram' /></a>
                        </div>
                        <button className='vvd' onClick={() =>  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }) }><span>Let's Connect</span></button>
                       

                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar
