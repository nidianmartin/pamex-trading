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

export default ActionProvider;
