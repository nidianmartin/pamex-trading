// MessageParser starter code
class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase()
    
    if (lowerCaseMessage.includes("blockchain")) {
      this.actionProvider.greet()
    }
    if (lowerCaseMessage.includes("criptomonedas") || lowerCaseMessage.includes("cryptocurrencies")) {
        this.actionProvider.handleCryptoList();
      }
  }
}

export default MessageParser;
