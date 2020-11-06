import React, { useState } from "react";
import Chatbot from "react-chatbot-kit";
import { VscHubot } from 'react-icons/vsc'
import './chatbot.css'
//Config
import { createChatBotMessage } from "react-chatbot-kit";
import BotAvatar from "../ChatBot/BotAvatar/BotAvatar";
import UserAvatar from "../ChatBot/UserAvatar/UserAvatar";
import LearningOptions from "../ChatBot/LearningOptions/LearningOptions";
import LinkList from "../ChatBot/LinkList/LinkList";


const config = {
  initialMessages: [
    createChatBotMessage(
      `Hola soy Mets, Bienvenidos a la presentación de Nidian. Sere tu guía en este mundo de criptomedas. ¿En que te puedo ayudar?`,
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
        ],
      },
    },
    {
      widgetName: "blockLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Blockchain es...",
            url:
              "https://www.xataka.com/especiales/que-es-blockchain-la-explicacion-definitiva-para-la-tecnologia-mas-de-moda",
            id: 1,
          },
        ],
      },
    },
    {
      widgetName: "saleCurrencies",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Exchanges",
            url:
              "/exchanges",
            id: 1,
          },
        ],
      },
    },
  ],
};

// ActionProvider starter code
class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }

  handleCryptoList = () => {
    const message = this.createChatBotMessage(
      "Fantástico, tengo los siguientes recursos para ti en Criptomonedas:",
      {
        widget: "cryptoLinks",
      }
    );
    this.updateChatbotState(message);
  };

  handleBlockchain = () => {
    const message = this.createChatBotMessage(
      "Fantástico, tengo los siguientes recursos para ti en Blockchain:",
      {
        widget: "blockLinks",
      }
    );
    this.updateChatbotState(message);
  };

  handleSaleCurrencies = () => {
    const message = this.createChatBotMessage(
      "Puedes consultar todos los exchange que tenemos en la web:",
      {
        widget: "saleCurrencies",
      }
    );
    this.updateChatbotState(message);
  };

  greet() {
    const greetingMessage = this.createChatBotMessage(
      "Gracias a todos los que apoyaron a Nidian durante este Bootcamp, cada uno de vosotros dejaís algo en su mente y corazón. Gracias Plaso espero que estes orgulloso de haber sido su TA en los 3 proyectos"
    );
    this.updateChatbotState(greetingMessage);
  }

  greetGroup() {
    const greetingMessage = this.createChatBotMessage(
      "Saludos al mejor grupo WDPT2020"
    );
    this.updateChatbotState(greetingMessage);
  }

  marketCap() {
    const greetingMessage = this.createChatBotMessage(
      "El término Market Cap (o capitalización de mercado) se refiere a una métrica que mide el tamaño relativo de una criptomoneda. Se calcula multiplicando el precio de mercado actual de una moneda en particular por el número total de monedas en circulación. Market Cap = Precio Actual x Oferta"
    );
    this.updateChatbotState(greetingMessage);
  }

  supply() {
    const greetingMessage = this.createChatBotMessage(
      "El supply de una criptomoneda no es más que la cantidad de monedas que circulan en el mercado y estan en manos del público en general, es decir, nosotros. Nos indica muchas cosas de esa moneda, si está muerta, activa, el crecimiento a corto y medio plazo, la capitalización, tendencia, entre otras variables."
    );
    this.updateChatbotState(greetingMessage);
  }

  exchange() {
    const greetingMessage = this.createChatBotMessage(
      "Un exchange es una plataforma de negociaciones virtuales con criptodivisas, que permite a los clientes (traders) la realización de operaciones de compra/venta de criptomonedas y/o de intercambios de un tipo de criptomoneda por otro o por dinero fiat y, hasta por mercancía en algunas exchanges. En este sentido, las exchanges se pueden comparar a las casas de cambio que trabajan con dinero fiduciario en el mundo real."
    );
    this.updateChatbotState(greetingMessage);
  }

  galaxyScore() {
    const greetingMessage = this.createChatBotMessage(
      "Indica qué tan estable es una moneda al observar los indicadores de desempeño combinados en los mercados y el compromiso social. Puedes ver el Galaxy Score ™ en tiempo real de cualquier moneda en tu perfil de usuario."
    );
    this.updateChatbotState(greetingMessage);
  }

  altRank() {
    const greetingMessage = this.createChatBotMessage(
      "Mide el rendimiento de una moneda VS. todas las demás monedas que apoyamos activamente. En general, es una medida única que combina el rendimiento del precio de la moneda ALT en relación con Bitcoin y otros indicadores de actividad social en todo el mercado de cifrado. Una moneda puede tener un AltRank ™ alto de 1 incluso en una situación de mercado bajista."
    );
    this.updateChatbotState(greetingMessage);
  }

  candlestik() {
    const greetingMessage = this.createChatBotMessage(
      "Las velas japonesas o Candlestick son una representación gráfica del precio del mercado financiero en forma de velas. Las velas japonesas Trading están compuestas por un cuerpo y 2 mechas. Las velas representan la acción del precio durante un período de tiempo establecido. Además, pueden proporcionar información útil, como el sentimiento del mercado o posibles reversiones en los mercados relevantes al demostrar el movimiento de precios de una manera particular."
    );
    this.updateChatbotState(greetingMessage);
  }

  trading() {
    const greetingMessage = this.createChatBotMessage(
      "El ‘trading’ consiste en la compraventa de activos cotizados con mucha liquidez de mercado (acciones, divisas y futuros). Y ese mercado financiero es electrónico y está regulado. Su objetivo es obtener un beneficio económico cuando la operación genera una plusvalía."
    );
    this.updateChatbotState(greetingMessage);
  }

  updateChatbotState(message) {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }
}

// MessageParser starter code
class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase();

    if (lowerCaseMessage.includes("blockchain")) {
      this.actionProvider.handleBlockchain();
    }
    if (
      lowerCaseMessage.includes("criptomonedas") ||
      lowerCaseMessage.includes("cryptocurrencies")
    ) {
      this.actionProvider.handleCryptoList();
    }
    if (lowerCaseMessage.includes("amigos")) {
      this.actionProvider.greetGroup();
    }
    if (
      lowerCaseMessage.includes("market cap") ||
      lowerCaseMessage.includes("capitalización")
    ) {
      this.actionProvider.marketCap();
    }
    if (lowerCaseMessage.includes("supply")) {
      this.actionProvider.supply();
    }
    if (lowerCaseMessage.includes("exchange")) {
      this.actionProvider.exchange();
    }
    if (lowerCaseMessage.includes("comprar")) {
      this.actionProvider.handleSaleCurrencies();
    }
    if (lowerCaseMessage.includes("galaxy score")) {
      this.actionProvider.galaxyScore();
    }
    if (lowerCaseMessage.includes("alt rank")) {
      this.actionProvider.altRank();
    }
    if (lowerCaseMessage.includes("candlestik") || lowerCaseMessage.includes("velas")) {
      this.actionProvider.candlestik();
    }
    if (lowerCaseMessage.includes("trading")) {
      this.actionProvider.trading();
    }
    if (lowerCaseMessage.includes("adios")) {
      this.actionProvider.greet();
    }
  }
}


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
