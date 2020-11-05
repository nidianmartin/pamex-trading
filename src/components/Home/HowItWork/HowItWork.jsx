import React from "react";
import './howItWork.css';
import createAccount from '../Images/svg/create-account.svg'
import coins from '../Images/svg/coins.svg'
import payouts from '../Images/svg/payouts.svg'

export default function HowItWork() {
  return (
    <div>
      <div className="theme-inner-banner">
        <div className="custom-container-one">
          <h2 className="banner-title">Comó funciona</h2>
          <p>
            Todas los Exchanges tienen un excelente control de transacciones, donde solo deberas crear
            tu cuenta, hacer deposito en tu moneda local y comprar la criptomoneda que mas te guste.
            Si quieres obtener información para realizar estas transacciones visualiza nuestro apartado
            de Exchanges donde encontrataras una lista de los mejores.
          </p>
        </div>
      </div>

      <div className="how-it-works">
        <div className="container">
          <div className="main-wrapper">
            <div className="row single-block block-one">
              <div className="col-md-6">
                <div className="text">
                  <div className="number">1</div>
                  <h2 className="title">Crea una cuenta</h2>
                  <p>
                    Curabitur ullamcorper gravida condimentum. Mauris et lorem
                    scelerisque, porttitor odio et, finibus libero. Maecenas a
                    neque in enim rhoncus condimentum ornare id erat.
                    Pellentesque at dictum mauris.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="img-box">
                  <img
                    src={createAccount}
                    alt="create-account"
                    className="svg-img"
                  />
                </div>
              </div>
            </div>
            <div className="row single-block block-two">
              <div className="col-md-6 order-md-last">
                <div className="text">
                  <div className="number">2</div>
                  <h2 className="title">Deposita tus monedas</h2>
                  <p>
                    Curabitur ullamcorper gravida condimentum. Mauris et lorem
                    scelerisque, porttitor odio et, finibus libero. Maecenas a
                    neque in enim rhoncus condimentum ornare id erat.
                    Pellentesque at dictum.
                  </p>
                </div>
              </div>
              <div className="col-md-6 order-md-first">
                <div className="img-box">
                  <img src={coins} alt="coins" className="svg-img" />
                </div>
              </div>
            </div>
            <div className="row single-block">
              <div className="col-md-6 order-md-last">
                <div className="text">
                  <div className="number">3</div>
                  <h2 className="title">Haz seguimiento de tus pagos</h2>
                  <p>
                    Curabitur ullamcorper gravida condimentum. Mauris et lorem
                    scelerisque, porttitor odio et, finibus libero. Maecenas a
                    neque in enim rhoncus condimentum ornare id erat.
                    Pellentesque at dictum mauris.
                  </p>
                </div>
              </div>
              <div className="col-md-6 order-md-first">
                <div className="img-box">
                  <img
                    src={payouts}
                    alt=""
                    className="svg-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
