import styled from "styled-components";

export const Card = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  display: grid;
  grid-template-columns: 1fr;
  overflow: hidden;
  transition: all 0.3s ease;
  height: 100%;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  }
  
  @media screen and (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const CardLeft = styled.div`
  position: relative;
  height: 100%;
  min-height: 300px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
    
    &:hover {
      transform: scale(1.05);
    }
  }
`;

export const CardRight = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  h4 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #151418;
  }
  
  p {
    font-size: 0.9rem;
    margin-bottom: 1rem;
    color: #666;
    line-height: 1.5;
  }
`;

export const Stack = styled.div`
  margin-bottom: 1rem;
  
  .stackTitle {
    font-weight: 700;
    color: #151418;
    font-size: 1rem;
    display: block;
    margin-bottom: 0.5rem;
  }
  
  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
`;

export const BtnGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  
  .SecondarBtn {
    background-color: transparent;
    border: 1px solid rgb(57, 134, 250);
    color: rgb(57, 134, 250);
    
    &:hover {
      background-color: rgb(57, 134, 250);
      color: white;
    }
  }
  
  a {
    display: inline-block;
    text-align: center;
  }
`;

export const FallbackImage = styled.div`
  width: 100%;
  height: 100%;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #6a8eae, #4b6cb7);
  color: white;
  text-align: center;
  padding: 2rem;
  
  h3 {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
    text-shadow: 1px 1px 3px rgba(0,0,0,0.3);
  }
  
  .tech-tags {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.5rem;
    
    span {
      background-color: rgba(255, 255, 255, 0.2);
      padding: 0.3rem 0.8rem;
      border-radius: 20px;
      font-size: 0.8rem;
      backdrop-filter: blur(5px);
    }
  }
`;

export const TechTag = styled.span`
  background-color: #f0f0f0;
  color: #4b6cb7;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  display: inline-block;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #4b6cb7;
    color: white;
    transform: translateY(-2px);
  }
`;
