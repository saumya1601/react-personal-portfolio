import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
import ucsc from "../../images/ucsc.png";

const certifications = [
  {
    title: "MERN Stack Development",
    subtitle: "- HackerRank",
   
    delay: 0.2,
  },
  {
    title: "Full Stack Development",
    subtitle: "- Udemy",
   
    delay: 0.6,
  },
  {
    title: "Road Map to Full Stack Web Development",
    subtitle: "- Coursera",
   
    delay: 0.6,
  },
];

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
                {certifications.map((cert, index) => (
                  <Col md={4} key={index}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1, delay: cert.delay }}
                    >
                      <div className="cert-card">
                        <div className="content">
                          <a
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <div className="content-overlay"></div>
                            <div
                              className="cert-header"
                              style={{ backgroundColor: "white" }}
                            >
                              <img className="logo_img" src={ucsc} alt="cert-logo" />
                            </div>
                            <div className="content-details fadeIn-top">
                              <h3
                                className="content-title"
                                style={{ color: "black" }}
                              >
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
                            {cert.title}
                          </h2>
                          <h3
                            className="cert-body-subtitle"
                            style={{ color: "#eb90ff", marginBottom: "0px" }}
                          >
                            {cert.subtitle}
                          </h3>
                        </div>
                      </div>
                    </motion.div>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>

          <div className="blog--viewAll">
            <Link to="/certificatepage">
              <button className="btn btn-primary">
                View All <HiArrowRight className="viewArr" />
              </button>
            </Link>
          </div>
        </Container>
      </Container>
    </div>
  );
}
