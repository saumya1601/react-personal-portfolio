import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion"; // Import motion from framer-motion
import { FaCode } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
import pp from "../../images/portfolio.png";
import buildingProImage from "../../images/BuildingPro.png";
import cinemaProImage from "../../images/CinemaPro.png";
import lokManyaImage from "../../images/LokManya.png";
import harvestAndCoImage from "../../images/harvestandco.png";


export default function Projects() {
  const projects = [

    {
      title: "Personal Portfolio",
      image: pp,
      link: "https://github.com/saumya1601/react-personal-portfolio",
      description: "Welcome to my personal portfolio. Explore my work, skills, and achievements in a concise and visually appealing format. Get a glimpse of my expertise and creativity.",
      technologies: "HTML, CSS, SCSS, React, JavaScript",
    },
    {
      title: "Building Pro",
      image: buildingProImage,
      link: "https://buildingpro.in/",
      description: "A full-stack platform simplifying commercial space management. Connects admins, owners, and visitors with multi-role access, rental/sale workflows, real-time inquiries, billing, and ad management for efficient operations.",
      technologies: "React.js, MUI, Tailwind CSS, Framer Motion, Node.js, Express.js, MongoDB, AWS, Socket.io, JWT, Google OAuth, Cloudinary, Kafka, Redis, Razorpay",
    },
    {
      title: "Cinemapro",
      image: cinemaProImage,
      link: "https://github.com/saumya1601/react-personal-portfolio",
      description: "A comprehensive platform for the cinema and film industry, providing robust project management, a dynamic vendor marketplace with billing, user/profile management, and job postings for seamless industry collaboration.",
      technologies: "React.js, Node.js, Express.js, MongoDB, AWS, Socket.io",
    },
    {
      title: "Lokmanya",
      image: lokManyaImage,
      link: "https://www.lokmanya.ac.in/",
      description: "A college website providing information about courses, admissions, faculty, and campus life, designed for prospective and current students, and academic staff.",
      technologies: "HTML, CSS, JavaScript, React.js",
    },
    {
      title: "Harvest & Co.",
      image: harvestAndCoImage,
      link: "https://www.harvestandco.in/",
      description: "An e-commerce platform for raw herbal products, featuring product listings, secure payment gateways, user accounts, and order management, promoting natural and organic goods.",
      technologies: "HTML, CSS, JavaScript, React.js, Node.js, Express.js, MongoDB",
    },
  ];

  return (
    <div>
      <Container fluid className="certificate-section" id="about">
        <Container>
          <Row className="g-5">
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
              <Col key={index} md={4}>
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
