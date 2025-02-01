import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div>
      <Container>
        <Row className="mt-5">
          <Col md={5}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <lottie-player
                src="https://assets5.lottiefiles.com/packages/lf20_iv4dsx3q.json"
                background="transparent"
                speed="1"
                style={{ width: "100%", height: "90%" }}
                loop
                autoplay
              ></lottie-player>
            </motion.div>
          </Col>

          <Col md={7}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 3 }}
            >
              <p className="home-about-body">
                My name is <b className="purple">Saumya Modi </b>
                and I am a <b className="purple">Computer Engineering </b>
                student at <b className="purple">Vidush Somany Institute Of Technology And Research </b>
                in Kadi, Gujarat.
                <br />
                <br />
                I am proficient in various programming languages such as &nbsp;
                <b className="purple"> C, C++, Python, HTML, CSS, and JavaScript. </b>
                <br />
                <br />
                I also have experience working with frameworks and libraries such as &nbsp;
                <b className="purple"> ReactJS, NextJS, NodeJS, MongoDB, ExpressJS, and AWS. </b>
                <br />
                <br />
                Whenever possible, I also apply my passion for developing products with &nbsp;
                <b className="purple"> Modern JavaScript Libraries and Frameworks. </b>
                <br />
                <br />
                In my free time, I enjoy learning new technologies and &nbsp;
                <b className="purple">building new websites and products. </b>
              </p>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;