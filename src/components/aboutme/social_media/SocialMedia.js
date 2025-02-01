import React from "react";
import {
  AiOutlineInstagram,
  AiFillFacebook,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

const socialMediaLinks = [
  {
    icon: <AiOutlineInstagram />,
    url: "https://www.instagram.com/saumya_11622/",
    delay: 0.2,
  },
  {
    icon: <AiFillFacebook />,
    url: "https://www.facebook.com/",
    delay: 0.4,
  },
  {
    icon: <AiFillGithub />,
    url: "https://github.com/saumya1601",
    delay: 0.6,
  },
  {
    icon: <AiFillLinkedin />,
    url: "https://www.linkedin.com/in/saumya-modi-5b19bb274/",
    delay: 0.8,
  },
];

export default function SocialMedia() {
  return (
    <div className="mt-4">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Connect with me
      </motion.h1>
      <Container className="mt-5">
        <Row className="g-5">
          {socialMediaLinks.map((socialMedia, index) => (
            <Col key={index} md={3}>
              <a
                href={socialMedia.url}
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: socialMedia.delay }}
                >
                  {socialMedia.icon}
                </motion.div>
              </a>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
