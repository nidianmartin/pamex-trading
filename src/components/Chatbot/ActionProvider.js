import { message } from "antd";

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

  greet() {
    const greetingMessage = this.createChatBotMessage("En el caso de las criptomonedas, podemos pensarlo como el libro contable donde se registra cada una de las transacciones.")
    this.updateChatbotState(greetingMessage)
  }
  
  updateChatbotState(message) {
   this.setState(prevState => ({
    	...prevState, messages: [...prevState.messages, message]
    }))
  }
}

export default ActionProvider;