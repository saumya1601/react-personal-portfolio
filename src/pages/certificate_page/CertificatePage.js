import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import ucsc from "../../images/ucsc.png";
import ufm from "../../images/ufm.png";
import cbta from "../../images/CBT&A.pdf";
import Particle from "../../Particle";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const zoomIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
};

// Certificate data
const certificates = [
  {
    title: "Problem Solving Basic : Programming Fundamentals",
    organization: "HackerRank",
    link: "https://www.hackerrank.com/certificates/3573ea1a35bb",
    logo: ucsc,
  },
  {
    title: "Basic Computer Application : IT Support Technician level-1",
    organization: "Bangladesh Technical Education Board",
    link: cbta,
    logo: ufm,
  },
  {
    title: "Python Basic : Programming Fundamentals",
    organization: "HackerRank",
    link: "https://www.hackerrank.com/certificates/af66a6615aad",
    logo: ucsc,
  },
];

const CertificateCard = ({ certificate }) => (
  <Col md={4}>
    <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
      <div className="cert-card">
        <div className="content">
          <a href={certificate.link} target="_blank" rel="noopener noreferrer">
            <div className="content-overlay"></div>
            <div className="cert-header" style={{ backgroundColor: "white" }}>
              <img className="logo_img" src={certificate.logo} alt={certificate.title} />
            </div>
            <div className="content-details fadeIn-top">
              <h3 className="content-title" style={{ color: "black" }}>
                Certificate
              </h3>
            </div>
          </a>
        </div>
        <div className="cert-body">
          <h2 className="cert-body-title" style={{ fontWeight: 700, color: "#fbd9ad" }}>
            {certificate.title}
          </h2>
          <h3 className="cert-body-subtitle" style={{ color: "#eb90ff", marginBottom: "0px" }}>
            - {certificate.organization}
          </h3>
        </div>
      </div>
    </motion.div>
  </Col>
);

export default function CertificatePage() {
  return (
    <section className="home-section">
      <Container fluid id="home">
        <Particle />
        <Container className="home-content">
          <div className="d-flex justify-content-center" width="100%" style={{ backgroundColor: "#fbd9ad" }}>
            <motion.div initial="hidden" animate="visible" variants={zoomIn}>
              <h1 style={{ color: "rgb(134 61 176" }}>Certificates</h1>
            </motion.div>
          </div>
          <Container fluid className="certificate-section" id="about">
            <Container>
              <Row>
                <Col md={12} className="mt-5">
                  <Row className="g-5">
                    {certificates.map((cert, index) => (
                      <CertificateCard key={index} certificate={cert} />
                    ))}
                  </Row>
                </Col>
              </Row>
            </Container>
          </Container>
          <div className="blog--viewAll"></div>
        </Container>
      </Container>
    </section>
  );
}