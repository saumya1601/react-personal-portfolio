import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

export default function TechnicalSkill() {
  const skills = [
    { name: "React.js", level: 86, color: "#41f2ff" },
    { name: "Next.js", level: 85, color: "#ff8c2f" },
    { name: "Node.js", level: 86, color: "#ff8c2f" },
    { name: "Express.js", level: 86, color: "#39c4ff" },
    { name: "MongoDB", level: 85, color: "#54faae" },
    { name: "HTML5", level: 90, color: "#f1f965" },
    { name: "CSS3", level: 81, color: "#ff8c2f" },
    { name: "JavaScript", level: 81, color: "#f1f965" },
    { name: "Python", level: 90, color: "#39c4ff" },
    { name: "C", level: 85, color: "#fe3e57" },
    { name: "C++", level: 85, color: "#54faae" },
    { name: "MySQL", level: 88, color: "#ff0173" },
    { name: "Tailwind CSS", level: 80, color: "#41f2ff" },
    { name: "WebSocket", level: 80, color: "#ff8c2f" },
    { name: "AWS", level: 85, color: "#fe3e57" },
    { name: "Dokku", level: 75, color: "#54faae" },
    { name: "Kafka", level: 70, color: "#39c4ff" },
    { name: "Redis", level: 75, color: "#f1f965" },
    { name: "Winston", level: 70, color: "#ff8c2f" },
    { name: "Jest", level: 80, color: "#fe3e57" },
    { name: "Sentry", level: 70, color: "#54faae" },
    { name: "Jenkins", level: 75, color: "#39c4ff" },
    { name: "EC2", level: 80, color: "#f1f965" },
    { name: "S3 Bucket", level: 80, color: "#ff8c2f" },
    { name: "Coolify", level: 70, color: "#fe3e57" },
    { name: "Rate Limiting", level: 75, color: "#54faae" },
    { name: "Helmet.js", level: 70, color: "#39c4ff" },
    { name: "Razorpay Integration", level: 80, color: "#f1f965" },
    { name: "JWT", level: 85, color: "#ff8c2f" },
    { name: "Mongoose", level: 85, color: "#fe3e57" },
    { name: "Git", level: 90, color: "#54faae" },
    { name: "Github", level: 90, color: "#39c4ff" },
    { name: "Framer Motion", level: 75, color: "#f1f965" },
    { name: "Yup Validation", level: 80, color: "#ff8c2f" },
    { name: "Passport.js", level: 80, color: "#fe3e57" },
    { name: "Cloudinary", level: 80, color: "#54faae" },
    { name: "Cron Jobs", level: 75, color: "#39c4ff" },
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
