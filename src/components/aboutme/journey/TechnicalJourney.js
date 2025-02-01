import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import StarIcon from "@mui/icons-material/Star";

import {
  DiHtml5, DiPython, DiReact, DiCss3, DiJavascript1, DiMysql, DiNodejs
} from "react-icons/di";
import { TbBrandNextjs } from "react-icons/tb";
import { FaAws } from "react-icons/fa";
import { BiLogoMongodb } from "react-icons/bi";
import { SiExpress, SiCplusplus, SiC } from "react-icons/si";

// Common style object
const timelineStyle = {
  contentStyle: { background: "rgb(78 22 112)", color: "#fbd9ad" },
  contentArrowStyle: { borderRight: "7px solid rgb(78 22 112)" },
  iconStyle: { background: "rgb(78 22 112)", color: "#fbd9ad" }
};

// Technology Data
const technologies = [
  { name: "C Programming", icon: <SiC /> },  // Using SiCplusplus for C Programming
  { name: "C++ Programming", icon: <SiCplusplus /> },
  { name: "Python", icon: <DiPython /> },
  { name: "HTML", icon: <DiHtml5 /> },
  { name: "CSS", icon: <DiCss3 /> },
  { name: "JavaScript", icon: <DiJavascript1 /> },
  { name: "ReactJs", icon: <DiReact /> },
  { name: "NextJS", icon: <TbBrandNextjs /> },
  { name: "Node.js", icon: <DiNodejs /> },
  { name: "ExpressJS", icon: <SiExpress /> },
  { name: "MongoDB", icon: <BiLogoMongodb /> },
  { name: "AWS", icon: <FaAws /> },
  { name: "MySQL", icon: <DiMysql /> },
];

function TechnicalJourney() {
  return (
    <div className="mt-5">
      {/* Navigation Buttons */}
      <div>
        {["educationjourney", "experiencejourney", "technicaljourney", "projectjourney"].map((route, index) => (
          <Link key={index} className="btn btn-primary m-1" to={`/${route}`}>
            {route.replace("journey", " Journey")}
          </Link>
        ))}
      </div>

      {/* Heading with Animation */}
      <div className="mt-5 text-center">
        <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          Technical Journey
        </motion.h1>
      </div>

      {/* Timeline */}
      <VerticalTimeline>
        {technologies.map((tech, index) => (
          <VerticalTimelineElement key={index} {...timelineStyle} icon={tech.icon}>
            <h3 className="vertical-timeline-element-title">{tech.name}</h3>
          </VerticalTimelineElement>
        ))}

        {/* End Star Icon */}
        <VerticalTimelineElement iconStyle={{ background: "#fbd9ad", color: "rgb(78 22 112)" }} icon={<StarIcon />} />
      </VerticalTimeline>
    </div>
  );
}

export default TechnicalJourney;
