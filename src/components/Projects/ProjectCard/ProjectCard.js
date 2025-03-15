import React from "react";
import {
  Card,
  CardLeft,
  CardRight,
  Stack,
  BtnGroup,
  FallbackImage,
  TechTag
} from "./ProjectCardElements";

function ProjectCard({ img, title, description, tech_stack, github_url, demo_url }) {
  // Parse tech stack from string to array if it's not already an array
  const techStackArray = Array.isArray(tech_stack) 
    ? tech_stack 
    : tech_stack?.split(',').map(item => item.trim()) || [];
  
  return (
    <Card>
      <CardLeft>
        {img ? (
          <img src={img} alt={title} />
        ) : (
          <FallbackImage>
            <h3>{title}</h3>
            <div className="tech-tags">
              {techStackArray.slice(0, 3).map((tech, index) => (
                <span key={index}>{tech}</span>
              ))}
            </div>
          </FallbackImage>
        )}
      </CardLeft>
      <CardRight>
        <h4>{title}</h4>
        <p>{description}</p>
        <Stack>
          <span className="stackTitle">Tech Stack</span>
          <div className="tags">
            {techStackArray.map((tech, index) => (
              <TechTag key={index}>{tech}</TechTag>
            ))}
          </div>
        </Stack>
        <BtnGroup>
          <a
            className="btn btn2 SecondarBtn"
            href={github_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          <a
            className="btn PrimaryBtn"
            href={demo_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Demo ➜
          </a>
        </BtnGroup>
      </CardRight>
    </Card>
  );
}

export default ProjectCard;
