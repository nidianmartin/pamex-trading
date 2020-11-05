import React, { useState } from "react";
import Chatbot from "react-chatbot-kit";
import ActionProvider from "./ActionProvider";
import MessageParser from "./MessageParser";
import config from "./Config";
import { VscHubot } from 'react-icons/vsc'
import './chatbot.css'

export default function ChatBot() {
  const [showBot, toggleBot] = useState(false);
  const saveMessages = (messages) => {
    localStorage.setItem("chat_messages", JSON.stringify(messages));
  };

  const loadMessages = () => {
    const messages = JSON.parse(localStorage.getItem("chat_messages"));
    return messages;
  };

  return (
    <div>
      {showBot && (
        <div className="chatbot-content">
          <Chatbot
            config={config}
            actionProvider={ActionProvider}
            messageParser={MessageParser}
            messageHistory={loadMessages()}
            saveMessages={saveMessages}
          />
        </div>
        )}
        <button className="app-chatbot-button" onClick={() => toggleBot((prev) => !prev)}><VscHubot style={{fontSize:"40px"}}/></button>
    </div>
  );
}
