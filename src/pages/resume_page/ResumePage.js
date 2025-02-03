import { Container } from "react-bootstrap";
import Particle from "../../Particle";
import React from "react";
import { motion } from "framer-motion"; // Importing motion for animation

function Resume() {
  return (
    <div>
      <section className="home-section">
        <Container fluid id="home">
          <Particle />
          <Container className="home-content">
            {/* Adding motion effect to the title */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }} // Initial state (hidden and scaled down)
              animate={{ opacity: 1, scale: 1 }} // Final state (visible and normal size)
              transition={{ duration: 0.5 }} // Duration of the animation
              className="d-flex justify-content-center"
              style={{ backgroundColor: "#fbd9ad" }}
            >
              <h1 style={{ color: "rgb(134 61 176)" }}>RESUME</h1>
            </motion.div>

            {/* Resume Image with motion effect */}
            <motion.div
              initial={{ opacity: 0, y: 50 }} // Starting with opacity 0 and slight offset (y-axis)
              whileInView={{ opacity: 1, y: 0 }} // Animate to full opacity and default position
              viewport={{ once: true }} // Trigger animation only once when in view
              transition={{ duration: 0.5 }} // Duration of the animation
              className="resume d-flex justify-content-center mt-4"
            >
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
            </motion.div>
          </Container>
        </Container>
      </section>
    </div>
  );
}

export default Resume;
