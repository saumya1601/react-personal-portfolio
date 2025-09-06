import React from "react";
import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import JavascriptIcon from "@mui/icons-material/Javascript";


const projects = [
  { title: "Personal Portfolio", icon: <JavascriptIcon /> },
  { title: "Building Pro", icon: <JavascriptIcon /> },
  { title: "Cinemapro", icon: <JavascriptIcon /> },
  { title: "Lokmanya", icon: <JavascriptIcon /> },
  { title: "Harvest & Co.", icon: <JavascriptIcon /> },
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
