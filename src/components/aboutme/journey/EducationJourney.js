import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import SchoolIcon from "@mui/icons-material/School";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import { motion } from "framer-motion";


const educationData = [
  {
    title: "PRIMARY AND SECONDARY SCHOOL CERTIFICATE",
    institution: "SHRI J. M. CHAUDHARY, MEHESANA",
    date: "2008 - 2018",
    description:
      "Studied here from Class 1 to 10th as a part of secondary school Certificate and gain 92% in my SSC Examination.",
  },
  {
    title: "HIGHER SECONDARY SCHOOL CERTIFICATE",
    institution: "SHRI J. M. CHAUDHARY, MEHESANA",
    date: "2018 - 2020",
    description:
      "Studied here from Class 11th and 12th as a part of higher secondary school Certificate and gain 70% in my HSC Examination.",
  },
  {
    title: "GRADUATION",
    institution: "Vidush Somany Institute Of Technology And reaserch, Kadi",
    date: "2020 - 2024",
    description:
      "Studied Bachelor of Engineering degree in Computer Engineering field and gain CGPA 7.4.",
  },
];


function EducationJourney() {

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
      <div className="mt-5">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Qualification Journey
        </motion.h1>
      </div>
      <VerticalTimeline>
        {educationData.map((education, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
            date={education.date}
            iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
            icon={<SchoolIcon />}
          >
            <h4 className="vertical-timeline-element-title">{education.title}</h4>
            <h4 className="vertical-timeline-element-subtitle mt-2">
              {education.institution}
            </h4>
            <p>{education.description}</p>
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

export default EducationJourney;
