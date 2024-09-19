import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Navbar, Nav, Container, Row, Col, Carousel } from 'react-bootstrap'; // Import Carousel
import { FaSearch, FaCartPlus, FaHeart } from 'react-icons/fa'; // Import icons from react-icons
import { Link, useNavigate } from 'react-router-dom';

function Welcome() {
  return (
    <div className="welcome">      
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
