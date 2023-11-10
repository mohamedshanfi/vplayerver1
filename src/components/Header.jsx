import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
<Navbar className="bg-black">
        <Container>
          <Navbar.Brand>
          <Link to={'/'} style={{textDecoration:'none', color:'white', fontSize:'30px'}}><i class="fa-solid fa-video fa-beat text-warning me-4"></i>{' '}
              Videoplayer
          </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>  )
}

export default Header