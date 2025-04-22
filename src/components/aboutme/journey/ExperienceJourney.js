import React from "react";
import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";

const experienceData = [
  {
    title: "Soft Coding Solutions",
    subtitle: "Full Stack Developer",
    date: "10-02-2025 - Present",
    description: [
      "Developed web applications using the MERN stack (MongoDB, Express, React, Node.js).",
      "Collaborated with the front-end and back-end teams to deliver scalable solutions.",
      "Worked on optimizing code performance and improving application efficiency.",
      "Engaged in code reviews and debugging of existing features.",
      "Assisted in database management using MongoDB and PostgreSQL.",
      "Implemented RESTful APIs for the front-end and back-end integration.",
      "Resolved client-reported bugs efficiently to ensure a smooth user experience.",
      "Contributed to product development and feature enhancements for internal tools.",
      "Worked on the BizConnect platform, implementing core modules and improving UI/UX.",
    ],
    icon: <PersonIcon />,
    contentStyle: { background: "rgb(78 22 112)", color: "#fbd9ad" },
    contentArrowStyle: { borderLeft: "7px solid  rgb(78 22 112)" },
  },
  {
    title: "Teksun Microsys Pvt. Ltd",
    subtitle: "Full Stack Developer Intern",
    date: "09-09-2024 - 25-01-2025",
    description: [
      "Developed web applications using the MERN stack (MongoDB, Express, React, Node.js).",
      "Collaborated with the front-end and back-end teams to deliver scalable solutions.",
      "Worked on optimizing code performance and improving application efficiency.",
      "Engaged in code reviews and debugging of existing features.",
      "Assisted in database management using MongoDB and PostgreSQL.",
      "Implemented RESTful APIs for the front-end and back-end integration.",
    ],
    icon: <PersonIcon />,
    contentStyle: { background: "rgb(78 22 112)", color: "#fbd9ad" },
    contentArrowStyle: { borderLeft: "7px solid  rgb(78 22 112)" },
  },
  {
    title: "The Special Character PVT. LTD",
    subtitle: "Next.js Developer Intern",
    date: "10-06-2023 - 12-09-2023",
    description: [
      "Built and maintained responsive websites and applications using Next.js.",
      "Optimized web performance by employing server-side rendering (SSR) and static site generation (SSG).",
      "Implemented dynamic routing and optimized page load times for a better user experience.",
      "Collaborated with UX/UI teams to ensure smooth design-to-development transitions.",
      "Integrated third-party services and APIs for enhanced functionality.",
      "Participated in daily stand-ups and agile sprint meetings to ensure smooth project flow.",
    ],
    icon: <PersonIcon />,
    contentStyle: { background: "rgb(78 22 112)", color: "#fbd9ad" },
    contentArrowStyle: { borderRight: "7px solid  rgb(78 22 112)" },
  },
];

function ExperienceJourney() {

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
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1>Experience Journey</h1>
        </motion.div>
      </div>


      <VerticalTimeline>
        {experienceData.map((experience, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
            date={experience.date}
            iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
            icon={experience.icon}
          >
            <h5 className="vertical-timeline-element-title">{experience.title}</h5>
            <h6 className="vertical-timeline-element-subtitle mt-2">
              {experience.subtitle}
            </h6>
            {experience.description.map((desc, i) => (
              <p key={i}>{desc}</p>
            ))}
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

export default ExperienceJourney;
