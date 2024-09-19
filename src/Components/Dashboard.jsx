import { styled } from '@mui/material';
import React, { useState } from 'react';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import { FaSearch, FaCartPlus, FaHeart } from 'react-icons/fa';
import { Outlet, Link } from 'react-router-dom';

function Dashboard() {
  const [sideNavItems, setSideNavItems] = useState([]);

  // Function to handle top menu clicks
  const handleTopMenuClick = (menuType) => {
    switch (menuType) {
      case 'cameradrones':
        setSideNavItems([
          { label: 'Aerial Photography', style: { fontWeight: 'bold', color: '#212529', fontSize: '15px' } },
          { label: 'DJI Mavic', link: 'djimavic', style: { fontWeight: 'bold', color: '#5e6a75', fontSize: '18px' } },
          { label: ' DJI Air', link: 'djiair', style: { fontWeight: 'bold', color: '#5e6a75', fontSize: '18px' } },
          { label: ' DJI Mini', link: 'djimini', style: { fontWeight: 'bold', color: '#5e6a75', fontSize: '18px' } },
          { label: 'Immersive Flight Experience', style: { fontWeight: 'bold', color: '#212529', fontSize: '15px' } },
          { label: ' DJI Avata', link: 'djiavata', style: { fontWeight: 'bold', color: '#5e6a75', fontSize: '18px' } },
          { label: ' DJI FPV', link: 'djifpv', style: { fontWeight: 'bold', color: '#5e6a75', fontSize: '18px' } },
          { label: 'Aerial Cinematic Tools', style: { fontWeight: 'bold', color: '#212529', fontSize: '15px' } },
          { label: 'DJI Inspire', link: 'djiinspire', style: { fontWeight: 'bold', color: '#5e6a75', fontSize: '18px' } },
        ]);
        break;
      case 'handheld':
        setSideNavItems([
          { label: 'Record Your Life', style: { fontWeight: 'bold', color: '#212529', fontSize: '15px' } },
          { label: 'Osmo Pocket', link: 'osmopocket', style: { fontWeight: 'bold', color: '#5e6a75', fontSize: '18px' } },
          { label: 'Osmo Action', link: 'osmoaction', style: { fontWeight: 'bold', color: '#5e6a75', fontSize: '18px' } },
          { label: 'Osmo Mobile', link: 'osmomobile', style: { fontWeight: 'bold', color: '#5e6a75', fontSize: '18px' } },
          { label: 'DJI Mic', link: 'djimic', style: { fontWeight: 'bold', color: '#5e6a75', fontSize: '18px' } },
          { label: 'Professional Shooting', style: { fontWeight: 'bold', color: '#212529', fontSize: '15px' } },
          { label: 'Ronin Stabilizers', link: 'roninstabilizers', style: { fontWeight: 'bold', color: '#5e6a75', fontSize: '18px' } },
          { label: 'Ronin Cinema Cameras', link: 'ronincinemacameras', style: { fontWeight: 'bold', color: '#5e6a75', fontSize: '18px' } },
        ]);
        break;
      case 'power':
        setSideNavItems([
          { label: 'Portable Power Station', style: { fontWeight: 'bold', color: '#212529', fontSize: '15px' } },
          { label: 'DJI Power', link: 'djipower', style: { fontWeight: 'bold', color: '#5e6a75', fontSize: '18px' } },
        ]);
        break;
      default:
        setSideNavItems([]);
        break;
    }
  };

  return (
    <div className="dashboard">
      {/* Top navigation section */}
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

      {/* Main Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg" className="menu">
        <Container>
          <Row className="w-100 align-items-center">
            <Col lg={1} className="d-flex align-items-center">
              <Navbar.Brand href="#" onClick={() => setSideNavItems([])}>
                DJI
              </Navbar.Brand>
            </Col>
            <Col lg={9} className="d-flex justify-content-around">
              <Nav className="d-flex justify-content-center" style={{ gap: '30px', marginLeft: '50px' }}>
                <Nav.Link as={Link} to="/dashboard/cameradrones" onClick={() => handleTopMenuClick('cameradrones')}>Camera Drones</Nav.Link>
                <Nav.Link as={Link} to="/dashboard/handheld" onClick={() => handleTopMenuClick('handheld')}>Handheld</Nav.Link>
                <Nav.Link as={Link} to="/dashboard/power" onClick={() => handleTopMenuClick('power')}>Power</Nav.Link>
                <Nav.Link as={Link} to="#services">Services</Nav.Link>
                <Nav.Link as={Link} to="#accessories">Accessories</Nav.Link>
              </Nav>
            </Col>
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

      <Container>
        <Row>
          {/* Side Navigation */}
          {sideNavItems.length > 0 && (
            <Col className="side-nav">
              <nav>
                <ul>
                  {sideNavItems.map((item, index) => (
                    <li key={index}>
                      <Link to={item.link || '#'} style={item.style}>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </Col>
          )}

          {/* Dynamic Content */}
          <Col className="content">
            <Outlet />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Dashboard;
