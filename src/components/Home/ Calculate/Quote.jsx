import React from "react";
import { Alert } from "antd";
import TextLoop from "react-text-loop";

export default function Quote({ result }) {
  if (Object.keys(result).length === 0) return null;
  return (
    <div className="quote">
      <Alert
        banner
        type="info"
        message={
          <TextLoop mask>
            <p style={{fontSize:16}}>
              Precio: <span>{result.PRICE}</span>
            </p>
            <p style={{fontSize:16}}>
              Precio mas alto del día: <span>{result.HIGHDAY}</span>
            </p>
            <p style={{fontSize:16}}>
              Precio mas bajo del día: <span>{result.LOWDAY}</span>
            </p>
            <p style={{fontSize:16}}>
              Variación en las ultimas 24hrs: <span>{result.CHANGEPCT24HOUR}%</span>
            </p>
          </TextLoop>
        }
      />
    </div>
  );
}
