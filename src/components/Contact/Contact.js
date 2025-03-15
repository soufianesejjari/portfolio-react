import React from "react";
import SocialIcon from "../SocialIcon/SocialIcon";
import { useProfile } from "../../context/ProfileContext";
import { ContactWrapper, Email } from "./ContactElements";

function Contact() {
  const { profileData } = useProfile();
  
  return (
    <ContactWrapper id="contact">
      <div className="Container">
        <div className="SectionTitle">Get In Touch</div>
        <div className="BigCard">
          <Email>
            <span>{profileData.email}</span>
            <a
              className="btn PrimaryBtn"
              href={`mailto:${profileData.email}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Send Mail
            </a>
          </Email>
        </div>
        <SocialIcon />
      </div>
    </ContactWrapper>
  );
}

export default Contact;
