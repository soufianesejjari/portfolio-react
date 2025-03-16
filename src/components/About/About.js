import React, { useState } from "react";
import { useProfile } from "../../context/ProfileContext";
import { stackList as defaultStackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  SkillTag,
  SkillName,
  ContactWrapper,
  SkillsTitle,
  SkillCategories,
  CategoryButton
} from "./AboutElements";

function About() {
  const { profileData } = useProfile();
  const [activeCategory, setActiveCategory] = useState('All');
  
  // Use skills from profileData if available, otherwise use default
  const skills = profileData?.skills || defaultStackList || [];
  
  // Process skills to ensure those without category go to "Other"
  const processedSkills = skills.map(skill => ({
    ...skill,
    category: skill.category || "Other"
  }));
  
  // Extract unique categories from skills
  const categoriesSet = new Set(processedSkills.map(skill => skill.category));
  // Create ordered array with "All" first and "Other" last (if it exists)
  const categoriesArray = Array.from(categoriesSet);
  const hasOther = categoriesArray.includes("Other");
  
  const orderedCategories = [
    "All",
    ...categoriesArray.filter(cat => cat !== "Other"),
    ...(hasOther ? ["Other"] : [])
  ];
  
  // Filter skills by active category
  const filteredSkills = activeCategory === 'All' 
    ? processedSkills 
    : processedSkills.filter(skill => skill.category === activeCategory);
  
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
          
          <SkillsTitle>Professional Skills</SkillsTitle>
          
          {orderedCategories.length > 1 && (
            <SkillCategories>
              {orderedCategories.map(category => (
                <CategoryButton 
                  key={category}
                  active={activeCategory === category}
                  onClick={() => setActiveCategory(category)}
                  isOther={category === "Other"}
                >
                  {category}
                </CategoryButton>
              ))}
            </SkillCategories>
          )}
          
          <Technologies>
            {filteredSkills.map((skill, index) => (
              <SkillTag key={index} index={index} isOther={skill.category === "Other"}>
                <SkillName>{skill.name}</SkillName>
              </SkillTag>
            ))}
            
            {filteredSkills.length === 0 && (
              <div style={{ padding: "1rem", color: "#666", textAlign: "center" }}>
                No skills available in this category
              </div>
            )}
          </Technologies>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
