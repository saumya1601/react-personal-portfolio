import React from "react";
import { motion } from "framer-motion";
import Particle from "../../Particle";
import { Container, Row, Col } from "react-bootstrap";
import { FaCode } from "react-icons/fa";

import pp from "../../images/portfolio.png";
import buildingProImage from "../../images/BuildingPro.png";
import cinemaProImage from "../../images/CinemaPro.png";
import lokManyaImage from "../../images/LokManya.png";
import harvestAndCoImage from "../../images/harvestandco.png";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="singleProject"
      style={{
        backgroundColor: "rgb(142 70 186 / 31%)",
        border: "1px solid",
      }}
    >
      <div className="projectContent">
        <h5 id={"first"} style={{ color: "#fbd9ad" }}>
          {project.title}
        </h5>
        <img src={project.image} alt={project.title} />
        <div className="project--showcaseBtn">
          <a
            href={project.github}
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
  );
};

const projects = [
  {
    title: "Personal Portfolio",
    image: pp,
    github: "https://github.com/saumya1601/react-personal-portfolio",
    description:
      "Welcome to my personal portfolio. Explore my work, skills, and achievements in a concise and visually appealing format. Get a glimpse of my expertise and creativity.",
    technologies: "HTML, CSS, SCSS, React, JavaScript",
  },
  {
    title: "Building Pro",
    image: buildingProImage,
    github: "https://buildingpro.in/",
    description:
      "A full-stack platform simplifying commercial space management. Connects admins, owners, and visitors with multi-role access, rental/sale workflows, real-time inquiries, billing, and ad management for efficient operations.",
    technologies: "React.js, MUI, Tailwind CSS, Framer Motion, Node.js, Express.js, MongoDB, AWS, Socket.io, JWT, Google OAuth, Cloudinary, Kafka, Redis, Razorpay",
  },
  {
    title: "Cinemapro",
    image: cinemaProImage,
    github: "https://github.com/saumya1601/react-personal-portfolio",
    description:
      "A comprehensive platform for the cinema and film industry, providing robust project management, a dynamic vendor marketplace with billing, user/profile management, and job postings for seamless industry collaboration.",
    technologies: "React.js, Node.js, Express.js, MongoDB, AWS, Socket.io",
  },
  {
    title: "Lokmanya",
    image: lokManyaImage,
    github: "https://www.lokmanya.ac.in/",
    description:
      "A college website providing information about courses, admissions, faculty, and campus life, designed for prospective and current students, and academic staff.",
    technologies: "HTML, CSS, JavaScript, React.js",
  },
  {
    title: "Harvest & Co.",
    image: harvestAndCoImage,
    github: "https://www.harvestandco.in/",
    description:
      "An e-commerce platform for raw herbal products, featuring product listings, secure payment gateways, user accounts, and order management, promoting natural and organic goods.",
    technologies: "HTML, CSS, JavaScript, React.js, Node.js, Express.js, MongoDB",
  },
];

export default function ProjectPage() {
  return (
    <section className="home-section">
      <Container fluid id="home">
        <Particle />
        <Container className="home-content">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="d-flex justify-content-center"
            width="100%"
            style={{ backgroundColor: "#fbd9ad" }}
          >
            <h1 style={{ color: "rgb(134 61 176" }}>PROJECTS</h1>
          </motion.div>
          <div>
            <Container fluid className="certificate-section" id="about">
              <Container>
                <Row>
                  <Col md={12} className="mt-5">
                    <Row className="g-5">
                      {projects.map((project, index) => (
                        <Col key={index} md={3} className="col-sm-12 col-md-4">
                          <ProjectCard project={project} />
                        </Col>
                      ))}
                    </Row>
                  </Col>
                </Row>
              </Container>
            </Container>
          </div>
        </Container>
      </Container>
    </section>
  );
}
