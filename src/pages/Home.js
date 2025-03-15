import React from "react";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Education from "../components/Education/Education";
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
      {/* Only render the chatbot if the data exists */}
      {profileData?.chatbot && profileData.chatbot.apiBaseURL && profileData.chatbot.token && (
        <SimpleChatbot 
          apiBaseURL={profileData.chatbot.apiBaseURL}
          token={profileData.chatbot.token}
        />
      )}
      <Hero />
      <Projects />
      <Education /> {/* New Education section */}
      <About />
      <Contact />
      <Footer />
      <FixSocialIcon />
    </>
  );
}

export default Home;