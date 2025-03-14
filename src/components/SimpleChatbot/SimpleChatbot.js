import React from 'react';
import Chatbot from 'react-llm-chatbot';
import './SimpleChatbot.css';

const SimpleChatbot = ({ apiBaseURL, token }) => {



  return (
    <div className="chatbot-container">
            <Chatbot 
              apiBaseURL={apiBaseURL}
              token={token}
              theme="light"
              onError={(error) => console.error('Chatbot error:', error)}
            />
    </div>
  );
};

export default SimpleChatbot;