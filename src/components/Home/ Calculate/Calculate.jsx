import React, { useState, useEffect } from "react";
import "./calculate.css";
import { Row, Col } from "antd";
import ImageCalc from "../Images/PRODUCT/SVG/drawkit-grape-pack-illustration-14.svg";
import useCurrencie from "../../../hooks/useCurrencie";
import useCrypto from "../../../hooks/useCrypto";
import { listConvert } from "../../../services/api-services";
import Error from "../../Error";

export default function Calculate({ saveCoin, saveCrypto }) {
  //State List Crypto
  const [listCrypto, saveCryptos] = useState([]);
  //Control errors
  const [error, saveError] = useState(false);

  const coins = [
    { code: "EUR", name: "Euro €" },
    { code: "USD", name: "American dollar $" },
    { code: "MXN", name: "Peso Mexicano" },
    { code: "GBP", name: "Pound Sterling" },
  ];
  const [currencie, SelectCurrencie] = useCurrencie("Moneda local", "", coins);

  // Use crypto
  const [crypto, SelectCrypto] = useCrypto("Criptmoneda", "", listCrypto);

  //Service
  useEffect(() => {
    listConvert().then((resp) => {
      saveCryptos(resp.Data);
    });
  }, []);

  const quoteCurrency = (e) => {
    e.preventDefault();
    if (currencie === "" || crypto === "") {
      saveError(true);
      return;
    }
    saveError(false);
    saveCrypto(crypto)
    saveCoin(currencie)
  };

  return (
    <div className="container">
      <Row>
        <Col span={12}>
          <img style={{ width: 300 }} src={ImageCalc} alt="" />
        </Col>
        <Col span={12}>
          <form onSubmit={quoteCurrency}>
            {error ? <Error message="Seleccione sus monedas"/> : null}
            <SelectCurrencie />
            <SelectCrypto />
            <button className="btn-calculate" type="submit" >
              Calcular
            </button>
          </form>
        </Col>
      </Row>
    </div>
  );
}
