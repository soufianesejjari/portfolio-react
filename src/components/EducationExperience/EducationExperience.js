import React from "react";
import Education from "../Education/Education";
import Experience from "../Experience/Experience";
import { EducationExperienceSection, FlexContainer } from "./EducationExperienceElements";

function EducationExperience() {
  return (
    <EducationExperienceSection id="career">
      <div className="Container">
        <div className="SectionTitle">Education & Experience</div>
        <FlexContainer>
          <Education hideTitle />
          <Experience hideTitle />
        </FlexContainer>
      </div>
    </EducationExperienceSection>
  );
}

export default EducationExperience;
