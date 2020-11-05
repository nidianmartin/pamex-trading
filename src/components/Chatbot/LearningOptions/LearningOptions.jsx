import React from "react";

import "./LearningOptions.css";

const LearningOptions = (props) => {
  const options = [
    {
        text: "Cryptocurrencies",
        handler: props.actionProvider.handleCryptoList,
        id: 1,
    },
    { 
      text: "Blockchain", 
      handler: props.actionProvider.handleBlockchain, 
      id: 2 
    },
    { 
      text: "Exchange", 
      handler: props.actionProvider.handleSaleCurrencies, 
      id: 3 
    },
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className="learning-option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="learning-options-container">{optionsMarkup}</div>;
};

export default LearningOptions;