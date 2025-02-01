import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import vs from "../../../images/Vs.png";
import git from "../../../images/git.png";
import github from "../../../images/github.png";
import pm from "../../../images/pm.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Import motion from framer-motion

export default function Toolkit() {
  const tools = [
    { src: vs, alt: "VS Code" },
    { src: git, alt: "Git" },
    { src: github, alt: "GitHub", style: { filter: "grayscale(1) invert(1)" } },
    { src: pm, alt: "PM Tools" },

  ];

  return (
    <div>
      <div className="mt-5 d-flex flex-row justify-content-center">
        <Link className="btn btn-primary me-3" to="/technicalSkill">
          Technical Skill
        </Link>
        <Link className="btn btn-primary me-3" to="/personalskill">
          Personal Skill
        </Link>
        <Link className="btn btn-primary " to="/toolkit">
          Toolkit
        </Link>
      </div>
      {/* Replace Zoom with framer-motion animation */}
      <motion.h1
        className="mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Tools I Use
      </motion.h1>
      <Container className="mt-4">
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          {tools.map((tool, index) => (
            <Col xs={4} md={2} key={index} className="tech-icons">
              <img
                src={tool.src}
                alt={tool.alt}
                style={{
                  width: "85%",
                  height: "85%",
                  ...(tool.style || {})
                }}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
