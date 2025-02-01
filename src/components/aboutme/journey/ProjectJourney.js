import React from "react";
import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import JavascriptIcon from "@mui/icons-material/Javascript";
import CssIcon from "@mui/icons-material/Css";
import HtmlIcon from "@mui/icons-material/Html";
import CodeIcon from "@mui/icons-material/Code";

const projects = [
  { title: "Shoppy Ecommerce Website", icon: <JavascriptIcon /> },
  { title: "Amazing Meal System", icon: <JavascriptIcon /> },
  { title: "Academia Learning Website", icon: <JavascriptIcon /> },
  { title: "Personal Portfolio", icon: <JavascriptIcon /> },
  { title: "Online Payroll Management System", icon: <CssIcon /> },
  { title: "New Year Countdown", icon: <HtmlIcon /> },
  { title: "Heart Disease Prediction", icon: <CodeIcon /> },
  { title: "Dual Mode Calendar", icon: <CssIcon /> },
  { title: "Dual Mode Calculator", icon: <CssIcon /> },
  { title: "Digital Clock", icon: <CssIcon /> },
  { title: "Age Calculator", icon: <JavascriptIcon /> },
  { title: "Student Information Management System", icon: <CodeIcon /> },
];

function ProjectJourney() {
  return (
    <div className="mt-5">
      <div>
        <Link className="btn btn-primary m-1" to="/educationjourney">
          Educational Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/experiencejourney">
          Experience Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/technicaljourney">
          Technical Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/projectjourney">
          Project Journey
        </Link>
      </div>

      {/* Animated Heading using framer-motion */}
      <div className="mt-5">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1>Project Journey</h1>
        </motion.div>
      </div>


      

      {/* Vertical Timeline */}
      <VerticalTimeline>
        {projects.map((project, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
            date=""
            iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
            icon={project.icon}
          >
            <h3 className="vertical-timeline-element-title">{project.title}</h3>
          </VerticalTimelineElement>
        ))}

        <VerticalTimelineElement
          iconStyle={{ background: "#fbd9ad", color: "rgb(78 22 112)" }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </div>
  );
}

export default ProjectJourney;
