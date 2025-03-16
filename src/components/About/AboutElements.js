import styled from "styled-components";

export const ContactWrapper = styled.div`
  margin-top: 5rem;
`;

export const Image = styled.img`
  max-width: 120px;
  margin: 0 auto;
  margin-bottom: 1rem;
  border-radius: 50%;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
  border: 4px solid rgba(57, 134, 250, 0.3);
`;

export const Technologies = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.85rem;
  margin: 2rem auto;
  max-width: 900px;
`;

export const SkillsTitle = styled.h3`
  text-align: center;
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 1.5rem;
  margin-top: 2rem;
  position: relative;
  
  &:after {
    content: "";
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 40px;
    height: 3px;
    background-color: rgb(57, 134, 250);
    border-radius: 2px;
  }
`;

export const SkillCategories = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-bottom: 1.5rem;
  margin-top: 2rem;
`;

export const CategoryButton = styled.button`
  background: ${props => props.active ? 'rgb(57, 134, 250)' : 'transparent'};
  color: ${props => props.active ? 'white' : '#555'};
  border: 1px solid ${props => props.active ? 'rgb(57, 134, 250)' : '#ddd'};
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.2s ease;
  
  /* Slightly different styling for "Other" category */
  ${props => props.isOther && `
    background: ${props.active ? 'rgb(106, 142, 174)' : 'transparent'};
    border-color: ${props.active ? 'rgb(106, 142, 174)' : '#ddd'};
    &:hover {
      background: ${props.active ? 'rgb(106, 142, 174)' : 'rgba(106, 142, 174, 0.05)'};
      border-color: rgb(106, 142, 174);
      color: ${props.active ? 'white' : 'rgb(106, 142, 174)'};
    }
  `}
  
  &:hover {
    background: ${props => props.active ? 'rgb(57, 134, 250)' : 'rgba(57, 134, 250, 0.05)'};
    border-color: rgb(57, 134, 250);
    color: ${props => props.active ? 'white' : 'rgb(57, 134, 250)'};
    transform: translateY(-2px);
  }
`;

export const SkillTag = styled.div`
  background: ${props => {
    // Softer, more modern pastel colors
    const standardColors = [
      'linear-gradient(135deg, #e0f2fe, #bae6fd)',
      'linear-gradient(135deg, #dbeafe, #bfdbfe)',
      'linear-gradient(135deg, #ede9fe, #c4b5fd)',
      'linear-gradient(135deg, #f3e8ff, #d8b4fe)',
      'linear-gradient(135deg, #fae8ff, #f5d0fe)'
    ];
    
    // Special color for "Other" category
    if (props.isOther) {
      return 'linear-gradient(135deg, #f1f5f9, #e2e8f0)';
    }
    
    return standardColors[props.index % standardColors.length];
  }};
  color: ${props => props.isOther ? '#64748b' : '#445980'};
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.2s ease;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);
  position: relative;
  overflow: hidden;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 0.25rem;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
  }
`;

export const SkillName = styled.div`
  font-weight: 500;
  letter-spacing: 0.3px;
`;

// Keep these for backward compatibility
export const Tech = styled.div``;
export const TechImg = styled.img``;
export const TechName = styled.div``;
export const SkillLevel = styled.div``;
export const SkillRating = styled.div``;
