import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Header from "../Header/Header";
import { useProfile } from "../../context/ProfileContext";
import {
  HeroContainer,
  HeroWrapper,
  HeroLeft,
  HeroRight,
  Image,
  ScrollDown,
  ScrollLink,
  ImageContainer
} from "./HeroElements";

function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const { profileData } = useProfile();

  // Default image as fallback
  const profileImage = profileData?.profileImg || "https://raw.githubusercontent.com/gurupawar/website/main/src/Assets/man-svgrepo-com.svg";

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <main>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <HeroContainer>
        <HeroWrapper>
          <HeroLeft>
            <h1>Hi, I'm {profileData?.name || 'Developer'}</h1>
            <h5>{profileData?.title || 'Portfolio'}</h5>
            <p>
              {profileData?.tagline || 'Welcome to my portfolio'}
            </p>
          </HeroLeft>
          <HeroRight>
            <ImageContainer>
              <Image
                src={profileImage}
                alt="hero-image"
              />
            </ImageContainer>
          </HeroRight>
        </HeroWrapper>
        <ScrollDown to="projects">
          <ScrollLink>
            Scroll down
            <img
              src="https://raw.githubusercontent.com/gurupawar/website/main/src/Assets/scroll-down.svg"
              alt="scroll-down"
            />
          </ScrollLink>
        </ScrollDown>
      </HeroContainer>
    </main>
  );
}

export default Hero;
