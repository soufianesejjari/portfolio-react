import React from "react";
import { useProfile } from "../../context/ProfileContext";
import { 
  ExperienceSection,
  ExperienceContainer,
  Timeline,
  TimelineItem,
  TimelineContent,
  TimelineDot,
  TimelineSeparator,
  TimelineConnector,
  TimelineDate,
  Company,
  Position,
  Description,
  SectionSubtitle
} from "./ExperienceElements";

function Experience({ hideTitle = false }) {
  const { profileData } = useProfile();
  
  // Use experience from profileData if available, otherwise use empty array
  const experiences = profileData?.experiences || [];
  
  return (
    <ExperienceSection id="experience" className="section-half">
      {!hideTitle && (
        <div className="SectionTitle">Work Experience</div>
      )}
      <SectionSubtitle>Work Experience</SectionSubtitle>
      <ExperienceContainer>
        {experiences.length > 0 ? (
          <Timeline>
            {experiences.map((experience, index) => (
              <TimelineItem 
                key={index} 
                isLast={index === experiences.length - 1}
              >
                <TimelineSeparator>
                  <TimelineDot />
                  {index !== experiences.length - 1 && <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent>
                  <Company>{experience.company}</Company>
                  <Position>{experience.position}</Position>
                  {experience.description && (
                    <Description>{experience.description}</Description>
                  )}
                  <TimelineDate>
                    {experience.startDate} - {experience.endDate || 'Present'}
                  </TimelineDate>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        ) : (
          <div className="empty-message">No work experience available</div>
        )}
      </ExperienceContainer>
    </ExperienceSection>
  );
}

export default Experience;
