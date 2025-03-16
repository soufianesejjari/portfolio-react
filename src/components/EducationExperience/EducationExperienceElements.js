import styled from "styled-components";

export const EducationExperienceSection = styled.div`
  padding: 5rem 0;
  background-color: #f9f9f9;
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  width: 100%;
  
  @media screen and (max-width: 992px) {
    flex-direction: column;
  }
`;
