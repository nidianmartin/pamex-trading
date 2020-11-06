import React, { useState } from "react";
import Chatbot from "react-chatbot-kit";
import config from "../Config/config";
import { VscHubot } from 'react-icons/vsc'
import './chatbot.css'
import ActionProvider from "../Action/ActionProvider";
import MessageParser from "../Message/MessageParser";

export default function Chat() {
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
