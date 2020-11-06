import React, { useState, useEffect } from "react";
import "./home.css";
import { Link } from "react-router-dom";
import image1 from "./Images/img1.png";
import Calculate from "./ Calculate/Calculate";
import TableCurrencies from "./TableCurrencies/TableCurrencies";
import Axios from "axios";
import Quote from "./ Calculate/Quote";
import { Row, Col } from "antd";

export default function Home() {
  const [coin, saveCoin] = useState("");
  const [crypto, saveCryto] = useState("");
  const [result, saveResult] = useState({});

  useEffect(() => {
    const consultCrypto = async () => {
      if (coin === "") return;
      const apiQuote = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=${coin}`;
      const result = await Axios.get(apiQuote);
      saveResult(result.data.DISPLAY[crypto][coin]);
    };
    consultCrypto();
  }, [coin, crypto]);

  return (
    <div className="Pamex-header">
      <div className="Pamex-main-banner">
        <div
          className="img-wrapper float-right fadeInRight wow"
          data-wow-duration="1.2s"
          data-wow-delay="1.6s"
        >
          <img src={image1} alt="Image1 Banner" />
        </div>
        <div className="container">
          <div className="main-wrapper clearfix">
            <div className="text-wrapper float-left">
              <h1 className="main-title fadeInDown wow">
                La mejor Criptoinformación
              </h1>
              <p
                className="sub-text fadeInUp wow"
                data-wow-duration="1.2s"
                data-wow-delay="0.5s"
              >
                Todo lo que necesitas saber de criptomonedas y mercados.
                Centraliza toda tu información en una sola web. <br />
                ¿Ya tienes cuenta?
              </p>
              <ul
                className="button-group fadeInUp wow"
                data-wow-duration="1.2s"
                data-wow-delay="1s"
              >
                <li className="start-button">
                  <Link to="/signup" className="btn-default">
                    Crear Cuenta
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="investment-calculation">
        <Row>
          <Col span={24}>
            <h1>CALCULADORA DE CRIPTOMONEDAS</h1>
            <Calculate saveCoin={saveCoin} saveCrypto={saveCryto} />
          </Col>
          <Col span={24}>
            <Quote result={result} />
          </Col>
        </Row>
      </div>
      <div className="table-cryptos">
        <TableCurrencies />
      </div>
    </div>
  );
}
