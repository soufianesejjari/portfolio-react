import React from "react";
import { useProfile } from "../../context/ProfileContext";
import { ProjectList } from "../../data/ProjectData";
import ProjectCard from "./ProjectCard/ProjectCard";
import styled from "styled-components";

const ProjectSection = styled.div`
  padding: 5rem 0;
  background-color: #f9f9f9;
`;

const ProjectContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2.5rem;
  margin-top: 3rem;
  
  @media (min-width: 992px) {
    grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
  }
`;

const EmptyProject = styled.div`
  text-align: center;
  grid-column: 1 / -1;
  padding: 3rem 0;
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #666;
  }
`;

function Projects() {
  const { profileData } = useProfile();
  
  // Use projects from profileData if available, otherwise use ProjectList from data
  const projects = profileData?.projects || ProjectList;
  
  return (
    <ProjectSection id="projects">
      <div className="Container">
        <div className="SectionTitle">Projects</div>
        {projects && projects.length > 0 ? (
          <ProjectContainer>
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                img={project.img}
                title={project.title || "Untitled Project"}
                description={project.description || "No description available."}
                tech_stack={project.tech_stack || ""}
                github_url={project.github_url || "#"}
                demo_url={project.demo_url || "#"}
              />
            ))}
          </ProjectContainer>
        ) : (
          <EmptyProject>
            <h3>No projects available at the moment.</h3>
          </EmptyProject>
        )}
      </div>
    </ProjectSection>
  );
}

export default Projects;
