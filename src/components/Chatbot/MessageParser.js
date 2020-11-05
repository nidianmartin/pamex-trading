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

export default MessageParser;
