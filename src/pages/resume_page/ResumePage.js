import { Container } from "react-bootstrap";
import Particle from "../../Particle";
import React from "react";
import { motion } from "framer-motion";

function Resume() {
  return (
    <div>
      <section className="home-section">
        <Container fluid id="home">
          <Particle />
          <Container className="home-content">
            <div
              className="d-flex justify-content-center"
              style={{ backgroundColor: "#fbd9ad" }}
            >
              <motion.h1
                style={{ color: "rgb(134 61 176)" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                RESUME
              </motion.h1>
            </div>
            {/* Resume Image */}
            <div className="resume d-flex justify-content-center mt-4">
              <img
                src="/Saumya-Modi-cv.png"
                alt="Resume"
                style={{
                  width: "100%",
                  maxWidth: "600px",
                  borderRadius: "10px",
                  boxShadow: "0px 0px 10px rgba(0,0,0,0.3)",
                }}
              />
            </div>

            {/* Download Button */}
            <div className="d-flex justify-content-center mt-4">
              <a
                href="/Saumya-Modi-cv.pdf" // Link to your resume PDF
                download
                className="btn btn-primary"
                style={{ fontSize: "16px", padding: "10px 20px", borderRadius: "5px" }}
              >
                Download Resume
              </a>
            </div>
          </Container>
        </Container>
      </section>
    </div>
  );
}

export default Resume;
