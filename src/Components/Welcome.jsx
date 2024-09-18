import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Navbar, Nav, Container, Row, Col, Carousel } from 'react-bootstrap'; // Import Carousel
import { FaSearch, FaCartPlus, FaHeart } from 'react-icons/fa'; // Import icons from react-icons
import { Link, useNavigate } from 'react-router-dom';

function Welcome() {
  return (
    <div className="welcome">
      {/* Top navigation section (will be hidden on smaller screens) */}
      <Container className="navt">
        <Row>
          <Col xs="10">
            <ul className="d-flex">
              <li>dji.com</li>
              <li>Refurbished Products</li>
              <li>More</li>
              <li>Limited time only - free fast-delivery upgrade!</li>
            </ul>
          </Col>
          <Col xs="2">
            <ul>
              <li>United States (English / $ USD)</li>
            </ul>
          </Col>
        </Row>
      </Container>

      {/* Main responsive Navbar without hamburger menu */}
      <Navbar bg="dark" variant="dark" expand="lg" className="menu">
        <Container>
          <Row className="w-100 align-items-center">
            {/* Logo Section */}
            <Col lg={1} className="d-flex align-items-center">
              <Navbar.Brand href="#">DJI</Navbar.Brand>
            </Col>
            
            {/* Menu Section */}
            <Col lg={9} className="d-flex justify-content-center">
              <Nav className="d-flex justify-content-center ">
                {/* Main menu items */}
                <Nav.Link href="/dashboard/cameradrones">Camera Drones</Nav.Link>
                <Nav.Link href="#handheld">Handheld</Nav.Link>
                <Nav.Link href="#power">Power</Nav.Link>
                <Nav.Link href="#services">Services</Nav.Link>
                <Nav.Link href="#accessories">Accessories</Nav.Link>
              </Nav>
            </Col>
            
            {/* Icons Section */}
            <Col lg={2} className="d-flex align-items-center justify-content-end">
              <div className="nav-icons">
                <FaSearch className="nav-icon" />
                <FaHeart className="nav-icon" />
                <FaCartPlus className="nav-icon" />
              </div>
            </Col>
          </Row>
        </Container>
      </Navbar>

      {/* Carousel Section */}
      <Container fluid className="p-0">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100 custom-carousel-img"
              src={`${process.env.PUBLIC_URL}/images/s1.jpg`}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First Slide Label</h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100 custom-carousel-img"
              src={`${process.env.PUBLIC_URL}/images/s2.jpg`}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Second Slide Label</h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100 custom-carousel-img"
              src={`${process.env.PUBLIC_URL}/images/s3.jpg`}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third Slide Label</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>

      <Container fluid>
        <Row className='items'>
          <Col lg="1" md="2" xs="4"><img src={`${process.env.PUBLIC_URL}/images/g4.png`}  /> <Link to="/" >DJI Mavic</Link>   </Col>
          <Col lg="1" md="2" xs="4"><img src={`${process.env.PUBLIC_URL}/images/g5.png`}  /> <Link to="/" >DJI Air</Link>   </Col>   
          <Col lg="1" md="2" xs="4"><img src={`${process.env.PUBLIC_URL}/images/g7.png`}  /> <Link to="/" >DJI Mini</Link>   </Col>
          <Col lg="1" md="2" xs="4"><img src={`${process.env.PUBLIC_URL}/images/g2.png`}  /> <Link to="/" >DJI Avata</Link>   </Col>
          <Col lg="1" md="2" xs="4"><img src={`${process.env.PUBLIC_URL}/images/g10.png`} /> <Link to="/" >DJI Inspire</Link>   </Col>
          <Col lg="1" md="2" xs="4"><img src={`${process.env.PUBLIC_URL}/images/g9.png`}  /> <Link to="/" >DJI Pocket</Link>   </Col>
          <Col lg="1" md="2" xs="4"><img src={`${process.env.PUBLIC_URL}/images/g8.png`}  /> <Link to="/" >Osmo Action</Link>   </Col>
          <Col lg="1" md="2" xs="4"><img src={`${process.env.PUBLIC_URL}/images/g12.png`}  style={{ height: "110px" , marginTop: "40px" }}/> <Link to="/" >DJI Mic</Link>   </Col>
          <Col lg="1" md="2" xs="4"><img src={`${process.env.PUBLIC_URL}/images/g1.png`}  /> <Link to="/" >Osmo Mobile</Link>   </Col>
          <Col lg="1" md="2" xs="4"><img src={`${process.env.PUBLIC_URL}/images/g6.png`}  /> <Link to="/" >Ronin Stabilizers</Link>   </Col>
          <Col lg="1" md="2" xs="4"><img src={`${process.env.PUBLIC_URL}/images/g3.png`}  /> <Link to="/" >Ronin Cinema Cameras</Link>   </Col>
          <Col lg="1" md="2" xs="4"><img src={`${process.env.PUBLIC_URL}/images/g11.png`} /> <Link to="/" >DJI Power</Link>   </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Welcome;
