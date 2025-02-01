import React from "react";
import { motion } from "framer-motion";
import Particle from "../../Particle";
import { Container, Row, Col } from "react-bootstrap";
import { FaCode } from "react-icons/fa";
import nyc from "../../images/nyc.png";
import ci from "../../images/onboarding.png";
import eco from "../../images/eco.png";
import pp from "../../images/portfolio.png";
import meal from "../../images/meal.png";
import ac from "../../images/academic.png";
import age from "../../images/age.png";
import calculator from "../../images/calculator.png";
import calendar from "../../images/calendar.png";
import dc from "../../images/dc.png";


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
    title: "New Year CountDown",
    image: nyc,
    github: "https://github.com/MD-MAFUJUL-HASAN/Web_Programming/tree/main/New-Year-Countdown",
    description: "The New Year Countdown Project is more than just a celebration; it's a testament to the human spirit and our shared aspirations for a brighter future. So, mark your calendars and get ready to be part of this global extravaganza as we count down to a new year filled with endless possibilities.",
    technologies: "HTML, CSS, JavaScript"
  },

  {
    title: "Online Payroll Management System",
    image: ci,
    github: "https://github.com/MD-MAFUJUL-HASAN/Online-Payroll-Management-System",
    description: "A Payroll management System with feature like generate payslip & reports. It manages salaries, leaves, branches, employees, designations, shifts, holidays and employee attendance. It has chat application so internal employees can use that feature.",
    technologies: "HTML, CSS, JavaScript, PHP, SCSS"
  },
  {
    title: "Shoppy Ecommerce",
    image: eco,
    github: "https://github.com/MD-MAFUJUL-HASAN/Shoppy_Ecommerce",
    description: "Seamless online shopping with a vast catalog, secure transactions, and personalized recommendations. 24/7 customer support, flexible payments, and fast shipping. Explore our website and redefine your shopping experience.",
    technologies: "HTML, CSS, React, JavaScript"
  },
  {
    title: "Personal Portfolio",
    image: pp,
    github: "https://github.com/MD-MAFUJUL-HASAN/Personal-Portfolio",
    description: "Welcome to my personal portfolio. Explore my work, skills, and achievements in a concise and visually appealing format. Get a glimpse of my expertise and creativity.",
    technologies: "HTML, CSS, SCSS, React, JavaScript"
  },
  {
    title: "Amazing Meal",
    image: meal,
    github: "https://github.com/MD-MAFUJUL-HASAN/Amazing_Meal",
    description: "Indulge in a mouthwatering meal that combines flavors and textures to create a culinary masterpiece. Our carefully crafted dishes are made with the freshest ingredients, expertly prepared to satisfy your taste buds and leave you craving for more.",
    technologies: "HTML, CSS, JavaScript, React"
  },
  {
    title: "Academia Learning Website",
    image: ac,
    github: "https://github.com/MD-MAFUJUL-HASAN/Academia",
    description: "Unlock your potential with our dynamic learning website. Access a wide range of courses, interactive lessons, and expert instructors to enhance your knowledge and skills. Start your learning journey today and expand your horizons.",
    technologies: "HTML, CSS, JavaScript, React"
  },
  {
    title: "Dual Mode Calendar",
    image: calendar,
    github: "https://github.com/MD-MAFUJUL-HASAN/Web_Programming/tree/main/Dual-Mode-Calendar",
    description: "The Dual Mode Calendar project is a versatile web application built with HTML, CSS, and JavaScript. It seamlessly toggles between a traditional monthly calendar view and a sleek event scheduler. Users can effortlessly manage appointments and events in a visually appealing and user-friendly interface.",
    technologies: "HTML, CSS, JavaScript"
  },
  {
    title: "Dual Mode Calculator",
    image: calculator,
    github: "https://github.com/MD-MAFUJUL-HASAN/Web_Programming/tree/main/Dual-Mode-Calculator",
    description: "The Dual Mode Calculator project is a web application created with HTML, CSS, and JavaScript. It offers two modes: basic and scientific, providing essential arithmetic functions and advanced calculations. The user-friendly interface and responsive design ensure seamless use across various devices.",
    technologies: "HTML, CSS, JavaScript"
  },
  {
    title: "Digital Clock",
    image: dc,
    github: "https://github.com/MD-MAFUJUL-HASAN/Web_Programming/tree/main/Digital-Clock",
    description: "Create a sleek, responsive digital clock with HTML, CSS, and JavaScript. Display real-time hours, minutes, and seconds, and update automatically. Customize its style and layout using CSS for a modern, functional timekeeping experience.",
    technologies: "HTML, CSS, JavaScript"
  },
  {
    title: "Age Calculator",
    image: age,
    github: "https://github.com/MD-MAFUJUL-HASAN/Web_Programming/tree/main/Age-Calculator",
    description: "Create an Age Calculator project using HTML, CSS, and JavaScript. Input your birthdate, and the tool instantly calculates your current age. The sleek design and user-friendly interface make age determination quick and hassle-free. Perfect for websites, apps, or personal use.",
    technologies: "HTML, CSS, JavaScript"
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