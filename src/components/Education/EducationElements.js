import styled from "styled-components";

export const EducationSection = styled.div`
  padding: 5rem 0;
  background-color: #ffffff;
`;

export const EducationContainer = styled.div`
  max-width: 700px;
  margin: 0 auto;
  padding: 2rem 0;

  .empty-message {
    text-align: center;
    font-size: 1.1rem;
    color: #666;
    margin: 2rem 0;
  }
`;

export const Timeline = styled.div`
  position: relative;
  padding: 1rem 0;
`;

export const TimelineItem = styled.div`
  display: flex;
  margin-bottom: ${(props) => (props.isLast ? "0" : "2rem")};
`;

export const TimelineSeparator = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TimelineDot = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: rgb(57, 134, 250);
  margin-right: 1rem;
  z-index: 1;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
`;

export const TimelineConnector = styled.div`
  width: 2px;
  height: 100%;
  background-color: rgba(57, 134, 250, 0.3);
  margin-right: 1rem;
  margin-top: 10px;
`;

export const TimelineContent = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.1);
  flex: 1;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin-left: 1rem;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15);
  }
`;

export const School = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
  color: #151418;
  font-weight: 600;
`;

export const Degree = styled.h4`
  font-size: 1.1rem;
  color: rgb(57, 134, 250);
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

export const FieldOfStudy = styled.p`
  font-size: 1rem;
  color: #444;
  margin-bottom: 0.75rem;
`;

export const TimelineDate = styled.div`
  font-size: 0.85rem;
  color: #666;
  font-weight: 500;
  background-color: #f5f5f5;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  display: inline-block;
  margin-top: 0.5rem;
`;
