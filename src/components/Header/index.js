import AnchorLink from 'react-anchor-link-smooth-scroll'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from "react-router-dom"


import './header.css'

function Header() {
  return (

    <>
      {['lg'].map((expand) => (
        <Navbar sticky='top' key={expand} expand={expand} className="bg-black text-geral">
          <Container fluid>
            <Navbar.Brand className='ms-0'>
              <img className='logo' src="https://dlzumwzvsvpdqblhfoof.supabase.co/storage/v1/object/public/imagens/logo02" />
              <text className='text-light fw-bold fs-6 d-lg-none'>Natanael A Costa</text>

            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              className="bg-dark me-0"
            >
              <Offcanvas.Header  closeButton className='ms-0 bg-light p-3 me-0'>
                <text className='text-geral fw-bold fs-6'>Natanael A Costa</text>
              </Offcanvas.Header>

              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3 ">
                  <AnchorLink className='mx-2 text-light border-bottom-red fw-bold' href='#sobremim' >Sobre Mim</AnchorLink>
                  <AnchorLink className=' fw-bold mx-2 border-bottom-red text-light' href='#valores'>Qualidades</AnchorLink>
                  <AnchorLink className='fw-bold mx-2 border-bottom-red text-light' href='#experiencia'>Experiencias</AnchorLink>
                  <AnchorLink className='fw-bold mx-2 border-bottom-red text-light ' href='#skilldev'>Desevolvedor</AnchorLink>
                  <AnchorLink className='fw-bold mx-2 border-bottom-red text-light' href='#skilltec'>Tecnico TI</AnchorLink>
                  <Link className='fw-bold mx-2 border-bottom-red text-light' to='promovaonline'>PromovaOnline</Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Header;