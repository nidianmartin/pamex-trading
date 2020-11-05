import React from "react";

import "./LearningOptions.css";

const LearningOptions = (props) => {
  const options = [
    {
        text: "Cryptocurrencies",
        handler: props.actionProvider.handleCryptoList,
        id: 1,
    },
    { text: "Blockchain", handler: () => {}, id: 2 },
    { text: "Defi", handler: () => {}, id: 3 },
    { text: "Trading", handler: () => {}, id: 4 },
    { text: "Markets", handler: () => {}, id: 5 },
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