import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
       <Navbar className="bg-body-tertiary">
        <Container>
          <Link to={'/'} style={{textDecoration:"none"}}>
            <Navbar.Brand>
            <i className="fa-brands fa-spotify fa-2xl" style={{color: "#000000"}}></i>
            {' '}  Spotify
            </Navbar.Brand>
          </Link>

        </Container>
      </Navbar>
    </div>
  )
}

export default Header

