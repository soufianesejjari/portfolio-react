import React from "react";
import { useProfile } from "../../context/ProfileContext";
import { 
  EducationSection,
  EducationContainer,
  Timeline,
  TimelineItem,
  TimelineContent,
  TimelineDot,
  TimelineSeparator,
  TimelineConnector,
  TimelineDate,
  School,
  Degree,
  FieldOfStudy
} from "./EducationElements";

function Education() {
  const { profileData } = useProfile();
  
  // Use education from profileData if available, otherwise use empty array
  const educations = profileData?.educations || [];
  
  return (
    <EducationSection id="education">
      <div className="Container">
        <div className="SectionTitle">Education</div>
        <EducationContainer>
          {educations.length > 0 ? (
            <Timeline>
              {educations.map((education, index) => (
                <TimelineItem key={index} isLast={index === educations.length - 1}>
                  <TimelineSeparator>
                    <TimelineDot />
                    {index !== educations.length - 1 && <TimelineConnector />}
                  </TimelineSeparator>
                  <TimelineContent>
                    <School>{education.school}</School>
                    <Degree>{education.degree}</Degree>
                    <FieldOfStudy>{education.fieldOfStudy}</FieldOfStudy>
                    <TimelineDate>
                      {education.startDate} - {education.endDate || 'Present'}
                    </TimelineDate>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </Timeline>
          ) : (
            <div className="empty-message">No educational background available</div>
          )}
        </EducationContainer>
      </div>
    </EducationSection>
  );
}

export default Education;
