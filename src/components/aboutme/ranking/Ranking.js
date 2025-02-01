import React from "react";
import { FaHackerrank } from "react-icons/fa";
import {
  SiLeetcode,
  SiHackerearth,
  SiCodechef,

} from "react-icons/si";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

const platforms = [
  {
    icon: <FaHackerrank />,
    url: "https://www.hackerrank.com",
    delay: 0.2,
  },
  {
    icon: <SiLeetcode />,
    url: "https://leetcode.com",
    delay: 0.4,
  },
  {
    icon: <SiHackerearth />,
    url: "https://www.hackerearth.com",
    delay: 0.6,
  },
  {
    icon: <SiCodechef />,
    url: "https://www.codechef.com",
    delay: 0.8,
  }
];

export default function Ranking() {
  return (
    <div className="mt-4">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        See my rank
      </motion.h1>
      <Container className="mt-5">
        <Row className="g-5">
          {platforms.map((platform, index) => (
            <Col key={index} md={3}>
              <a
                href={platform.url}
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: platform.delay }}
                >
                  {platform.icon}
                </motion.div>
              </a>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
