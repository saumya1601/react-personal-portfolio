import React from 'react';
import Contactus from '../../components/contactus/Contactus';
import { Container } from "react-bootstrap";
import Particle from "../../Particle";

import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <div>
      <section className="home-section">
        <Container fluid id="home">
          <Particle />
          <Container className="home-content">
            <motion.div
              initial={{ opacity: 0, y: 50 }} // Starting with opacity 0 and slight offset (y-axis)
              whileInView={{ opacity: 1, y: 0 }} // Animate to full opacity and default position
              viewport={{ once: true }} // Trigger animation only once when in view
              transition={{ duration: 0.5 }} // Duration of the animation
              className="resume d-flex justify-content-center"
              style={{ marginTop: -140 }} // Directly removing the margin-top
            >
              <Contactus />
            </motion.div>
          </Container>
        </Container>
      </section>
    </div>
  );
}
