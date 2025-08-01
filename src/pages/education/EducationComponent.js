import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Educations from "../../containers/education/Educations";
// import Certifications from "../../containers/certifications/Certifications";
import EducationImg from "./EducationImg";
import "./EducationComponent.css";
import { Fade } from "react-reveal";

function Education(props) {
  const theme = props.theme;
  return (
    <div className="education-main">
      <Header theme={props.theme} setTheme={props.setTheme} />
      <div className="basic-education">
        <Fade bottom duration={2000} distance="40px">
          <div className="heading-div">
            <div className="heading-img-div">
              <EducationImg theme={theme} />
            </div>
            <div className="heading-text-div">
              <h1 className="heading-text" style={{ color: theme.text }}>
                Education and Background
              </h1>
              <h3 className="heading-sub-text" style={{ color: theme.text }}>
                Basic Qualification and Certifications
              </h3>
              <p
                className="experience-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                I have a formal educational background in Information
                Technology, starting from vocational high school (SMK) through
                to university. I have further enhanced my skills through
                professional work experience and by contributing to various IT
                projects, particularly in ERP systems and web development. My
                expertise is a combination of formal education and practical,
                hands-on experience
              </p>
            </div>
          </div>
        </Fade>
        <Educations theme={props.theme} />
        {/* <Certifications theme={props.theme} /> */}
      </div>
      <Footer theme={props.theme} />
    </div>
  );
}

export default Education;
