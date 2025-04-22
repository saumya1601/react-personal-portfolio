import React from 'react'
import { Container, Row, Col, Nav } from "react-bootstrap";
import { Link, Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function AboutmeContainer() {
    return (
        <Container fluid className="home-about-section" id="about">
            <Container>
                <Row>
                    <Col md={12} className="home-about-description d-flex justify-content-start">
                        <motion.h1
                            className='aboutme-heading'
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            About me
                        </motion.h1>
                    </Col>
                    <Col ms={12} className="mt-3 d-flex flex-column">
                        <div>
                            <Nav justify variant="tabs" defaultActiveKey="/">
                                <Nav.Item className="Navitem">
                                    <Nav.Link as={Link} to="/" eventKey="link-1" style={{ fontSize: "17px", fontWeight: 700 }}>About</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link as={Link} to="technicalskill" eventKey="link-2" style={{ fontSize: "17px", fontWeight: 700 }}>Skills</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link as={Link} to="educationjourney" eventKey="link-3" style={{ fontSize: "17px", fontWeight: 700 }}>Journey</Nav.Link>
                                </Nav.Item>

                            </Nav>
                            <div>
                                <Outlet />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}
