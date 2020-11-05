import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import LearningOptions from "./LearningOptions/LearningOptions.jsx";
import LinkList from "./LinkList/LinkList.jsx";
import BotAvatar from './BotAvatar/BotAvatar.jsx'
import UserAvatar from './UserAvatar/UserAvatar.jsx'

const config = {
  initialMessages: [
    createChatBotMessage(
      `Hola soy Mets, sere tu guía en este mundo de criptomedas. ¿En que te puedo ayudar?`,
      {
        widget: "learningOptions",
      }
      ),
    ],
    botName: "Mets",
    customComponents : {
      botAvatar: (props) => <BotAvatar {...props}/>,
      userAvatar: (props) => <UserAvatar {...props}/>,
    },
    customStyles: {
    botMessageBox: {
      backgroundColor: "#2676e4",
    },
    chatButton: {
      backgroundColor: "#37d0e0",
    },
  },
  widgets: [
    {
      widgetName: "learningOptions",
      widgetFunc: (props) => <LearningOptions {...props} />,
    },
    {
      widgetName: "cryptoLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Crytocurrencies Wikipedia",
            url:
              "https://es.wikipedia.org/wiki/Criptomoneda",
            id: 1,
          },
          {
            text: "Lo que hay que saber sobre las criptomonedas",
            url:
              "https://www.consumidor.ftc.gov/articulos/lo-que-hay-que-saber-sobre-las-criptomonedas",
            id: 2,
          },
          {
            text: "Lista de Criptomonedas",
            url: "/market",
            id: 3,
          },
        ],
      },
    },
  ],
};

export default config;
