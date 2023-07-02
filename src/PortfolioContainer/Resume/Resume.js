import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";
import { ReactComponent as EducationIcon } from "../../assets/Resumesvg/education.svg";
import { ReactComponent as InterestsIcon } from "../../assets/Resumesvg/interests.svg";
import { ReactComponent as SkillsIcon } from "../../assets/Resumesvg/programming-skills.svg";
import { ReactComponent as ProjectsIcon } from "../../assets/Resumesvg/projects.svg";
import { ReactComponent as WorkHistoryIcon } from "../../assets/Resumesvg/work-history.svg";

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Education", logo: <EducationIcon /> },
    { label: "Interests", logo: <InterestsIcon /> },
    { label: "My Skills", logo: <SkillsIcon /> },
    { label: "Projects", logo: <ProjectsIcon /> },
    { label: "Work History", logo: <WorkHistoryIcon /> },
  ];

  //here we have
  const programmingSkillsDetails = [
    { skill: "Product Management", ratingPercentage: 75 },
    { skill: "Trello", ratingPercentage: 70 },
    { skill: "Jira", ratingPercentage: 70 },
    { skill: "Figma", ratingPercentage: 80 },
    { skill: "Adobe XD", ratingPercentage: 70 },
    { skill: "React JS", ratingPercentage: 70 },
    { skill: "JavaScript", ratingPercentage: 65 },
    { skill: "Node JS", ratingPercentage: 65 },
    { skill: "HTML", ratingPercentage: 85 },
    { skill: "CSS", ratingPercentage: 85 },
  ];

  const projectsDetails = [
    {
      title: "Crown-clothing-shop",
      duration: { fromDate: "2022", toDate: "2022" },
      description:
        "As I am passionate about shopping, I decided to create a clothing website called Crown Clothing Shop after learning the framework.",
      subHeading: "Technologies Used: React JS, Firebase,SCSS",
    },
    {
      title: "It's not Netflix",
      duration: { fromDate: "2023", toDate: "2023" },
      description:
        "Users can browse and watch a wide range of movies and TV shows, receive personalized recommendations, and enjoy a user-friendly experience.",
      subHeading: "Technologies Used:  React JS, Firebase, Tailwind CSS",
    },
    {
      title: "Product Management-Uber Case Analysis",
      duration: { fromDate: "2023", toDate: "2023" },
      description:
        "Analysis and develop a product strategy and long-term roadmap, conducted extensive user research to gain deep insights,design framework ",
      subHeading: "Tool Used:CardBoard , Pointer Poker,Wireframe Design.",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"National Taipei University of Technology "}
        subHeading={"BACHELOR OF INDUSTRIAL ENGINEERING AND MANAGEMENT"}
        fromDate={"2021"}
        toDate={"2025"}
      />

      <ResumeHeading
        heading={"High School"}
        subHeading={
          "Songshan Higher Commercial and Family Career Vocational School"
        }
        fromDate={"2018"}
        toDate={"2021"}
      />
      <ResumeHeading
        heading={"Junior High School "}
        subHeading={"Zhanghe Junior High School "}
        fromDate={"2015"}
        toDate={"2018"}
      />
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="work-experience">
      <ResumeHeading
        heading="Problem Solving"
        description=" I'm deeply fascinated by problem solving. I thrive on the intellectual challenges it presents and enjoy analyzing complex issues from multiple perspectives. Finding innovative solutions and applying critical thinking to overcome obstacles excite me."
      />
      <ResumeHeading
        heading="Photography"
        description="Photography is my passion. It allows me to explore the world and share unique perspectives. I enjoy experimenting with techniques and lighting to create captivating images that preserve memories and tell stories."
      />
      <ResumeHeading
        heading="Design Enthusiast"
        description="Design's transformative impact fuels my passion. It enhances daily experiences, communicates effectively, and shapes interactions with the world. Diverse styles and techniques inspire me to push creative boundaries."
      />
    </div>,

    /* My SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <ResumeHeading
        heading="L'Oréal Taiwan Digital marketing experience"
        description="At L'Oréal Taiwan, I gained valuable experience in dynamic digital marketing. It deepened my understanding of digital strategies and campaigns, and honed my skills in engaging target audiences through diverse digital platforms."
      />
      <ResumeHeading
        heading="UI Designer/Web Visual Designer(Intership)"
        description="I have skills in website design, HTML, CSS coding, and interface maintenance. I also have experience in designing WordPress websites with responsive layouts, editing images using Photoshop, and video editing."
      />
      <ResumeHeading
        heading="Planning Intern"
        description="I have extensive experience in video production, including planning, shooting, editing, and lighting. I am involved in every aspect of the process, from conceptualizing scripts to meeting client requirements. I enjoy leading teams and taking projects from inception to completion."
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <div className="bullet-logo">{bullet.logo}</div>
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
