import React from "react";
import { useProfile } from "../../context/ProfileContext";
import { stackList as defaultStackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";

function About() {
  const { profileData } = useProfile();
  
  // Use stackList from profileData if available, otherwise use default
  const techStack = profileData?.topSkills || defaultStackList;
  
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <Image
            src={profileData?.profileImg}
            alt={`${profileData?.name}_picture`}
          />
          <div className="AboutBio">
            {profileData?.bio}
          </div>
          <div className="AboutBio tagline2">
            I have become confident using the following technologies.
          </div>
          <Technologies>
            {techStack && techStack.map((stack, index) => (
              <Tech key={index} className="tech">
                <TechImg src={stack.img} alt={stack.name} />
                <TechName>{stack.name}</TechName>
              </Tech>
            ))}
          </Technologies>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
