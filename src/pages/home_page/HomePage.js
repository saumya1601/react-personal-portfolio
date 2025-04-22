import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../../Particle";
import Typing from "./Typing";
import Tilt from "react-parallax-tilt";
import AboutmeContainer from "../../components/aboutme/aboutmeContainer";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn, FaFacebookF, FaGoogle } from "react-icons/fa";
import Certification from "../../components/certificate/Certification";
import Projects from "../../components/projects/Projects";
import Contactus from "../../components/contactus/Contactus";
import { motion } from "framer-motion";

export default function Home() {
  const socialLinks = [
    {
      href: "https://github.com/saumya1601",
      icon: <AiFillGithub />,
    },
    {
      href: "https://www.linkedin.com/in/saumya-modi-5b19bb274/",
      icon: <FaLinkedinIn />,
    },
    {
      href: "https://www.instagram.com/saumya_11622/",
      icon: <AiFillInstagram />,
    },
    {
      href: "https://www.facebook.com/",
      icon: <FaFacebookF />,
    },
    {
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=saumya20244@gmail.com",
      icon: <FaGoogle />,
    },
  ];

  return (
    <section className="home-section">
      <Container fluid id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={8} className="home-header">
              <motion.h1
                style={{ paddingBottom: 15, fontSize: "175px" }}
                className="heading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </motion.h1>

              <motion.h1
                className="heading-name"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                I'm
                <strong className="main-name"> Saumya Modi</strong>
              </motion.h1>

              <div className="typing-homeclass">
                <Typing />
              </div>
              <div className="sociallink-home">
                <ul className="homeaboutsociallinks">
                  {socialLinks.map((social, index) => (
                    <li key={index} className="socialicons">
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noreferrer"
                        className="iconcolour homesocialicons"
                      >
                        {social.icon}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
            <Col md={4} style={{ paddingBottom: 20 }}>
              <div className="img-home-main">
                <Tilt>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                  >
                    <img
                      src="./profile1.png"
                      alt="Profile pic"
                      className="img-fluid"
                    />
                  </motion.div>
                </Tilt>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <AboutmeContainer />
      <Certification />
      <Projects />
      <Contactus />
    </section>
  );
}
