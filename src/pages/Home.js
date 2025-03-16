import React from "react";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import EducationExperience from "../components/EducationExperience/EducationExperience";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import FixSocialIcon from "../components/SocialIcon/FixSocialIcon";
import SimpleChatbot from "../components/SimpleChatbot/SimpleChatbot";
import { useProfile } from "../context/ProfileContext";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";

function Home() {
  const { profileData, loading, error } = useProfile();

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <div className="error-message">Error loading profile: {error}</div>;
  }

  return (
    <>
      {profileData?.chatbot && profileData.chatbot.apiBaseURL && profileData.chatbot.token && (
        <SimpleChatbot 
          apiBaseURL={profileData.chatbot.apiBaseURL}
          token={profileData.chatbot.token}
        />
      )}
      <Hero />
      <Projects />
      <EducationExperience />
      <About />
      <Contact />
      <Footer />
      <FixSocialIcon />
    </>
  );
}

export default Home;