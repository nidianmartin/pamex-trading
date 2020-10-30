import React from "react";
import { Alert } from "antd";
import TextLoop from "react-text-loop";

export default function Quote({ result }) {
  if (Object.keys(result).length === 0) return null;
  console.log(result);
  return (
    <div className="quote">
      <Alert
        banner
        type="info"
        message={
          <TextLoop mask>
            <p style={{fontSize:16}}>
              Price: <span>{result.PRICE}</span>
            </p>
            <p style={{fontSize:16}}>
              Highest price of the day: <span>{result.HIGHDAY}</span>
            </p>
            <p style={{fontSize:16}}>
              Lowest price of the day: <span>{result.LOWDAY}</span>
            </p>
            <p style={{fontSize:16}}>
              Variation last 24 hours: <span>{result.CHANGEPCT24HOUR}</span>
            </p>
          </TextLoop>
        }
      />
    </div>
  );
}
