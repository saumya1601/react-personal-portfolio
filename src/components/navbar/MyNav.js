import React, { useState } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
} from "react-icons/ai";
import { FaBlog } from "react-icons/fa";
import "../../style.css";
import { CgFileDocument } from "react-icons/cg";

export default function MyNav() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  const navItems = [
    {
      path: "/",
      icon: <AiOutlineHome style={{ marginBottom: "2px" }} />,
      label: "Home",
    },
    {
      path: "/projectspage",
      icon: <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} />,
      label: "Projects",
    },
    {
      path: "/resume",
      icon: <CgFileDocument style={{ marginBottom: "2px" }} />,
      label: "Resume",
    },
    {
      path: "/certificatepage",
      icon: <ImBlog style={{ marginBottom: "2px" }} />,
      label: "Certifications",
    },
    {
      path: "/contact",
      icon: <FaBlog style={{ marginBottom: "2px" }} />,
      label: "Contact Me",
    },

    // {
    //   path: "/blogs",
    //   icon: <FaBlog style={{ marginBottom: "2px" }} />,
    //   label: "Blogs",
    // },
  ];

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/">
          <div className="d-flex flex-row justify-content-between">
            <img src="./profile1 circle.ico" className="img-fluid logo" alt="brand" />
            <h5
              id="navhead"
              style={{
                marginLeft: "21px",
                paddingTop: "6px",
                color: "#fbd9ad",
              }}
            >
              Saumya Modi
            </h5>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav" className="navbarmain">
          <Nav className="ml-auto" defaultActiveKey="#home">
            {navItems.map((item, index) => (
              <Nav.Item key={index}>
                <Nav.Link
                  as={Link}
                  to={item.path}
                  onClick={() => updateExpanded(false)}
                >
                  {item.icon} {item.label}
                </Nav.Link>
              </Nav.Item>
            ))}

            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/saumya1601"
                target="_blank"
                className="fork-btn-inner"
              >
                <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                <AiFillStar style={{ fontSize: "1.1em" }} />
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
