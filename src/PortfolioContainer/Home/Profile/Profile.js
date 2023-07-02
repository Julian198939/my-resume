import React from "react";
import Typical from "react-typical";
import ScrollService from "../../../utilities/ScrollService";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.facebook.com/profile.php?id=100006353524005">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                <i className="fa fa-google-plus-square"></i>
              </a>
              <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="https://www.youtube.com/channel/UCSg0CGDVh5Ygy5c7K1mXO4Q">
                <i className="fa fa-youtube-square"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'm <span className="highlighted-text">Julian</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Product Manager 🗓",
                    1000,
                    "Video Editor 🐶",
                    1000,
                    "Fronted Developer 💻",
                    1000,
                    "UI Designer 🖍",
                    1000,
                  ]}
                />
              </h1>
            </span>
            <span className="profile-role-tagline">
              Embracing challenges & capturing life through photography.
            </span>
          </div>

          <div className="profile-options">
            <button
              className="btn primary-btn"
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            >
              {" "}
              Hire Me{" "}
            </button>
            <a
              href="https://www.cakeresume.com/love198939"
              aria-label="Link to my resume"
            >
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
