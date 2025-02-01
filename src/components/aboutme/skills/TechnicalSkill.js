import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

export default function TechnicalSkill() {
  const skills = [
    { name: "C", level: 85, color: "#fe3e57" },
    { name: "C++", level: 85, color: "#54faae" },
    { name: "Python", level: 90, color: "#39c4ff" },
    { name: "HTML", level: 90, color: "#f1f965" },
    { name: "CSS", level: 81, color: "#ff8c2f" },
    { name: "JavaScript", level: 81, color: "#f1f965" },
    { name: "React JS", level: 86, color: "#41f2ff" },
    { name: "Next JS", level: 85, color: "#ff8c2f" },
    { name: "NodeJS", level: 86, color: "#ff8c2f" },
    { name: "MongoDB", level: 85, color: "#54faae" },
    { name: "ExpressJS", level: 86, color: "#39c4ff" },
    { name: "AWS", level: 85, color: "#fe3e57" },
    { name: "MySQL", level: 88, color: "#ff0173" },
  ];

  return (
    <div>
      <div className="mt-5 d-flex flex-row justify-content-center">
        <Link className="btn btn-primary me-3" to="/technicalSkill">Technical Skill</Link>
        <Link className="btn btn-primary me-3" to="/personalskill">Personal Skill</Link>
        <Link className="btn btn-primary" to="/toolkit">Toolkit</Link>
      </div>
      <motion.h1 className="mt-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        Technical Skills
      </motion.h1>
      <div className="mt-5">
        <Container>
          <Row className="g-5">
            {skills.map((skill, index) => (
              <Col key={index} md={4}>
                <h1 style={{ fontSize: "100px", color: skill.color, fontWeight: 700 }}>{skill.level}%</h1>
                <div style={{ paddingLeft: "50px", paddingRight: "50px" }}>
                  <div className="progress">
                    <div
                      role="progressbar"
                      aria-valuenow={skill.level}
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: `${skill.level}%`, backgroundColor: skill.color }}
                    ></div>
                  </div>
                  <h2 style={{ color: skill.color, fontSize: "25px", marginTop: "13px", fontWeight: 700 }}>
                    {skill.name}
                  </h2>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );

}
