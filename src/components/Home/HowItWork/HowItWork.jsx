import React from "react";
import './howItWork.css';
import createAccount from '../Images/svg/create-account.svg'
import coins from '../Images/svg/coins.svg'
import timeframe from '../Images/svg/timeframe.svg'
import payouts from '../Images/svg/payouts.svg'

export default function HowItWork() {
  return (
    <div>
      <div className="theme-inner-banner">
        <div className="custom-container-one">
          <h2 className="banner-title">How it works</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            bibendum diam turpis, aliquet eleifend ex dictum sit amet. Etiam ut
            est purus. Ut efficitur enim et.
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
                  <h2 className="title">Create an account</h2>
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
                  <h2 className="title">Deposit your coins</h2>
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
            <div className="row single-block block-three">
              <div className="col-md-6">
                <div className="text">
                  <div className="number">3</div>
                  <h2 className="title">Setup your investment</h2>
                  <p>
                    Create your first investment by deciding for how long you
                    want to invest, the frequency of your payouts and how much
                    you want to invest. You can add funds to your investment at
                    any time.
                  </p>
                  <p className="condition">The minimum investment is $50.</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="img-box">
                  <div className="hiw-img-slider">
                    <div className="item">
                      <img
                        src={timeframe}
                        alt=""
                        className="svg-img"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row single-block">
              <div className="col-md-6 order-md-last">
                <div className="text">
                  <div className="number">4</div>
                  <h2 className="title">Collect your payouts</h2>
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
