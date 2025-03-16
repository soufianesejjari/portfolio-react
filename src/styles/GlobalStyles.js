import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  html, body {
    overflow-x: hidden;
    scroll-behavior: smooth;
  }

  ::-webkit-scrollbar {
    width: 10px;
    background: #f5f5f5;
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  body {
    font-family: 'Poppins', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #fcfcfc;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  li {
    list-style: none;
  }

  .Container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  .BigCard {
    width: 100%;
    background-color: #fff;
    border-radius: 12px;
    padding: 2.2rem;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s ease;
    
    &:hover {
      transform: translateY(-5px);
    }
  }

  .AboutBio {
    text-align: center;
    max-width: 650px;
    margin: 0 auto;
    color: #555;
    line-height: 1.7;
    font-size: 1rem;
    letter-spacing: 0.2px;
  }

  .btn {
    padding: 0.7rem 1.5rem;
    border-radius: 30px;
    border: none;
    cursor: pointer;
    font-weight: 500;
    transition: all 0.3s ease;
    
    &:hover {
      transform: translateY(-3px);
    }
  }

  .PrimaryBtn {
    background: rgb(57, 134, 250);
    color: white;
    
    &:hover {
      background: rgb(37, 114, 230);
    }
  }

  .SectionTitle {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    text-align: center;
    color: #151418;
    position: relative;
    
    &:after {
      content: "";
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 60px;
      height: 3px;
      background-color: rgb(57, 134, 250);
    }
  }

  #contact, #about, #education, #experience, #career {
    padding: 5rem 0;
  }

  .section-half {
    padding: 0 !important;
  }

  .ProjectWrapper {
    padding: 5rem 0;
  }

  .CardContainer {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 2rem;
  }

  .error-message {
    text-align: center;
    padding: 2rem;
    font-size: 1.2rem;
    color: red;
  }

  @media (max-width: 768px) {
    .CardContainer {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }

    .SectionTitle {
      font-size: 1.8rem;
    }
  }
`;

export default GlobalStyles;
