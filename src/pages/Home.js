import React from "react";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import FixSocialIcon from "../components/SocialIcon/FixSocialIcon";
import SimpleChatbot from "../components/SimpleChatbot/SimpleChatbot";

function Home() {
  const token = "4fd614209bbb33d1737c2b945d602ff3";
  const api = "https://soufianesejjari-chatai.hf.space";
  
  return (
    <>
      <SimpleChatbot 
        apiBaseURL={api}
        token={token}
      />
      <Hero />
      <Projects />
      <About />
      <Contact />
      <Footer />
      <FixSocialIcon />
    </>
  );
}

export default Home;