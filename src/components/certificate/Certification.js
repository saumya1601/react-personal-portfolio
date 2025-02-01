import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion"; // Import motion from framer-motion
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
import ucsc from "../../images/ucsc.png";
import ufm from "../../images/ufm.png";
import cbta from "../../images/CBT&A.pdf";

export default function Certification() {
  return (
    <div>
      <Container fluid className="certificate-section" id="about">
        <Container>
          <Row>
            <Col
              md={12}
              className="certificate-description d-flex justify-content-start"
            >
              <motion.h1
                className="aboutme-heading"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
              >
                Certification
              </motion.h1>
            </Col>
            <Col ms={12} className="mt-3">
              <Row className="g-5">
                <Col md={4}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                  >
                    <div className="cert-card">
                      <div className="content">
                        <a
                          href="https://www.hackerrank.com/certificates/3573ea1a35bb"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="content-overlay"></div>
                          <div
                            className="cert-header"
                            style={{ backgroundColor: "white" }}
                          >
                            <img className="logo_img" src={ucsc} alt={ucsc} />
                          </div>
                          <div className="content-details fadeIn-top">
                            <h3 className="content-title" style={{ color: "black" }}>
                              Certificate
                            </h3>
                          </div>
                        </a>
                      </div>
                      <div className="cert-body">
                        <h2
                          className="cert-body-title"
                          style={{ fontWeight: 700, color: "#fbd9ad" }}
                        >
                          Problem Solving Basic : Programming Fundamentals
                        </h2>
                        <h3
                          className="cert-body-subtitle"
                          style={{ color: "#eb90ff", marginBottom: "0px" }}
                        >
                          - HackerRank
                        </h3>
                      </div>
                    </div>
                  </motion.div>
                </Col>
                <Col md={4}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                  >
                    <div className="cert-card">
                      <div className="content">
                        <a
                          href={cbta}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="content-overlay"></div>
                          <div
                            className="cert-header"
                            style={{ backgroundColor: "white" }}
                          >
                            <img className="logo_img" src={ufm} alt={ufm} />
                          </div>
                          <div className="content-details fadeIn-top">
                            <h3 className="content-title" style={{ color: "black" }}>
                              Certificate
                            </h3>
                          </div>
                        </a>
                      </div>
                      <div className="cert-body">
                        <h2
                          className="cert-body-title"
                          style={{ fontWeight: 700, color: "#fbd9ad" }}
                        >
                          Basic Computer Application for Everyone: IT Support
                          Technician level-1
                        </h2>
                        <h3
                          className="cert-body-subtitle"
                          style={{ color: "#eb90ff", marginBottom: "0px" }}
                        >
                          - Bangladesh Technical Education Board
                        </h3>
                      </div>
                    </div>
                  </motion.div>
                </Col>
                <Col md={4}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6 }}
                  >
                    <div className="cert-card">
                      <div className="content">
                        <a
                          href="https://www.hackerrank.com/certificates/af66a6615aad"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="content-overlay"></div>
                          <div
                            className="cert-header"
                            style={{ backgroundColor: "white" }}
                          >
                            <img className="logo_img" src={ucsc} alt={ucsc} />
                          </div>
                          <div className="content-details fadeIn-top">
                            <h3 className="content-title" style={{ color: "black" }}>
                              Certificate
                            </h3>
                          </div>
                        </a>
                      </div>
                      <div className="cert-body">
                        <h2
                          className="cert-body-title"
                          style={{ fontWeight: 700, color: "#fbd9ad" }}
                        >
                          Python Basic for : Programming Fundamentals
                        </h2>
                        <h3
                          className="cert-body-subtitle"
                          style={{ color: "#eb90ff", marginBottom: "0px" }}
                        >
                          - HackerRank
                        </h3>
                      </div>
                    </div>
                  </motion.div>
                </Col>
              </Row>
            </Col>
          </Row>
          <div className="blog--viewAll">
            <Link to="/certificatepage">
              <button className="btn btn-primary">
                View All
                <HiArrowRight className="viewArr" />
              </button>
            </Link>
          </div>
        </Container>
      </Container>
    </div>
  );
}
