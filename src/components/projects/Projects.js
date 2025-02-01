import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion"; // Import motion from framer-motion
import { FaCode } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";

// Project images
import nyc from "../../images/nyc.png";
import ci from "../../images/onboarding.png";
import pp from "../../images/portfolio.png";
import age from "../../images/age.png";

export default function Projects() {
  const projects = [
    {
      title: "New Year CountDown",
      image: nyc,
      link: "https://github.com/MD-MAFUJUL-HASAN/Web_Programming/tree/main/New-Year-Countdown",
      description: "The New Year Countdown Project is more than just a celebration; it's a testament to the human spirit and our shared aspirations for a brighter future. So, mark your calendars and get ready to be part of this global extravaganza as we count down to a new year filled with endless possibilities.",
      technologies: "HTML, CSS, JavaScript",
    },

    {
      title: "Online Payroll Management System",
      image: ci,
      link: "https://github.com/MD-MAFUJUL-HASAN/Online-Payroll-Management-System",
      description: "A Payroll management System with features like generating payslips & reports. It manages salaries, leaves, branches, employees, designations, shifts, holidays, and employee attendance. It has a chat application for internal employee use.",
      technologies: "CSS, JavaScript, PHP, SCSS",
    },
    {
      title: "Personal Portfolio",
      image: pp,
      link: "https://github.com/MD-MAFUJUL-HASAN/Personal-Portfolio",
      description: "Welcome to my personal portfolio. Explore my work, skills, and achievements in a concise and visually appealing format. Get a glimpse of my expertise and creativity.",
      technologies: "HTML, CSS, SCSS, React, JavaScript",
    },
    {
      title: "Age Calculator",
      image: age,
      link: "https://github.com/MD-MAFUJUL-HASAN/Web_Programming/tree/main/Age-Calculator",
      description: "Create an Age Calculator project using HTML, CSS, and JavaScript. Input your birthdate, and the tool instantly calculates your current age. The sleek design and user-friendly interface make age determination quick and hassle-free. Perfect for websites, apps, or personal use.",
      technologies: "HTML, CSS, JavaScript"
    },

  ];

  return (
    <div>
      <Container fluid className="certificate-section" id="about">
        <Container>
          <Row>
            <Col md={12} className="certificate-description d-flex justify-content-start">
              <motion.h1
                className="aboutme-heading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                Projects
              </motion.h1>
            </Col>
            {projects.map((project, index) => (
              <Col key={index} md={3}>
                <motion.div
                  key={index}
                  className="singleProject"
                  style={{
                    backgroundColor: "rgb(142 70 186 / 31%)",
                    border: "1px solid",
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                >
                  <div className="projectContent">
                    <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                      {project.title}
                    </h5>
                    <img src={project.image} alt={project.title} />
                    <div className="project--showcaseBtn">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className={"iconBtn"}
                        aria-labelledby={`code`}
                      >
                        <FaCode id={`code`} className={"icon"} aria-label="Code" />
                      </a>
                    </div>
                  </div>
                  <h6>
                    <p
                      className="project--desc"
                      style={{
                        background: "#fbd9ad",
                        color: "#b061df",
                        fontWeight: 600,
                      }}
                    >
                      {project.description}
                    </p>
                  </h6>
                  <div
                    className="project--lang"
                    style={{
                      background: "#fbd9ad",
                      color: "#b061df",
                      fontWeight: 600,
                    }}
                  >
                    {project.technologies}
                  </div>
                </motion.div>
              </Col>
            ))}
          </Row>
          <div className="blog--viewAll">
            <Link to="/projectspage">
              <button className="btn btn-primary">
                View All
                <HiArrowRight className="viewArr" />
              </button>
            </Link>
          </div>
        </Container>
      </Container>
    </div>
  );
}
