import React from "react";
import "./Dashboard.css";

export default function Dashboard() {
  return (
    <div className="dashboard-user-content wallet-panel">
      <div className="row">
        <div className="col-xl-5">
          <div className="bg-box wallet-balance">
            <div className="title">Your Wallet Accounts</div>
            <div className="balance-sheet-wrapper">
              <ul>
                <li className="bitcoin-method clearfix">
                  <a className="clearfix" href="#">
                    <span className="name font-fix">
                      <img src="images/bitcoin2.png" alt="" /> Bitcoin
                    </span>
                    <span className="balance-inquery">
                      <span className="currency-title">0.0000 BTC</span>
                      <span className="total-currency">$0.00</span>
                    </span>
                  </a>
                </li>
                <li className="ethereum-method clearfix">
                  <a className="clearfix" href="#">
                    <span className="name font-fix">
                      <img src="images/ethereum2.png" alt="" /> Ethereum
                    </span>
                    <span className="balance-inquery">
                      <span className="currency-title">0.0000 ETC</span>
                      <span className="total-currency">$0.00</span>
                    </span>
                  </a>
                </li>
                <li className="litecoin-method clearfix">
                  <a className="clearfix" href="#">
                    <span className="name font-fix">
                      <img src="images/litecoin2.png" alt="" /> Litecoin
                    </span>
                    <span className="balance-inquery">
                      <span className="currency-title">0.0000 LTC</span>
                      <span className="total-currency">$0.00</span>
                    </span>
                  </a>
                </li>
              </ul>
              <div className="total-balance clearfix">
                <div className="balance-title">Total Balance ≈</div>
                <div className="balance-figure">$0.00</div>
              </div>
            </div>
            <ul className="button-group clearfix">
              <li>
                <button
                  className="deposit-button"
                  data-toggle="modal"
                  data-target="#deposit-modal"
                >
                  Deposit
                </button>
              </li>
              <li>
                <button
                  className="withdraw-button theme-button"
                  data-toggle="modal"
                  data-target="#withdraw-modal"
                >
                  <span></span>Withdraw
                </button>
              </li>
            </ul>
          </div>

          <div className="bg-box cryptocurrency-prices">
            <div className="clearfix">
              <div className="title tooltip-holder">
                Cryptocurrency Prices
                <button
                  type="button"
                  className="help-button"
                  data-toggle="tooltip"
                  data-placement="top"
                  title=""
                  data-original-title="The amount you want to invest, you can always add funds to your investment at any time."
                >
                  <img src="images/info.png" alt="" />
                </button>
              </div>
              <div className="live-status font-fix">live</div>
            </div>
            <ul className="currnecy-prices-list">
              <li className="clearfix">
                <div className="left-content">
                  <img src="images/bitcoin2.png" alt="" />
                  <div className="name">
                    <span className="text">BTC</span>
                    <span className="value font-fix">Bitcoin</span>
                  </div>
                </div>
                <div className="right-content">
                  <span className="text">Price</span>
                  <span className="value font-fix">
                    $6,370,62{" "}
                    <span className="current-rate down">
                      0.30% <img src="images/down.png" alt="" />
                    </span>
                  </span>
                </div>
              </li>
              <li className="clearfix">
                <div className="left-content">
                  <img src="images/ethereum2.png" alt="" />
                  <div className="name">
                    <span className="text">ETC</span>
                    <span className="value font-fix">Ethereum</span>
                  </div>
                </div>
                <div className="right-content">
                  <span className="text">Price</span>
                  <span className="value font-fix">
                    $452,19{" "}
                    <span className="current-rate down">
                      0.81% <img src="images/down.png" alt="" />
                    </span>
                  </span>
                </div>
              </li>
              <li className="clearfix">
                <div className="left-content">
                  <img src="images/litecoin2.png" alt="" />
                  <div className="name">
                    <span className="text">LTC</span>
                    <span className="value font-fix">Litecoin</span>
                  </div>
                </div>
                <div className="right-content">
                  <span className="text">Price</span>
                  <span className="value font-fix">
                    $80,28{" "}
                    <span className="current-rate up">
                      0.10% <img src="images/up.png" alt="" />
                    </span>
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-xl-7">
          <ul className="wallet-history clearfix">
            <li>
              <div className="inner-warpper">
                <h6 className="inner-title">Deposits</h6>
                <strong className="figure">$4,800.00</strong>
              </div>
            </li>
            <li>
              <div className="inner-warpper">
                <h6 className="inner-title">Withdrawals</h6>
                <strong className="figure">$0.00</strong>
              </div>
            </li>
            <li>
              <div className="inner-warpper">
                <h6 className="inner-title">Pending withdrawal</h6>
                <strong className="figure">$0.00</strong>
              </div>
            </li>
          </ul>

          <div className="transactions-history bg-box">
            <div className="title tooltip-holder">
              Pending Transactions
              <button
                type="button"
                className="help-button"
                data-toggle="tooltip"
                data-placement="top"
                title=""
                data-original-title="The amount you want to invest, you can always add funds to your investment at any time."
              >
                <img src="images/info.png" alt="" />
              </button>
            </div>

            <div className="table-responsive transactions-list">
              <table className="table">
                <tbody>
                  <tr role="row" className="single-list">
                    <td className="time font-fix">
                      <div className="month">Aug</div>
                      <div className="date">02</div>
                    </td>
                    <td>
                      <div className="heading font-fix">
                        Withdraw to Bitcoin
                      </div>
                      <div className="value">
                        1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX
                      </div>
                    </td>
                    <td>
                      <button className="cancel-transactions">Cancel</button>
                    </td>
                    <td>
                      <div className="heading font-fix">-1.0000 BTC</div>
                      <div className="value">-$6509.30</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="transactions-history completed-transactions-history bg-box">
            <div className="title tooltip-holder">
              Completed Transactions
              <button
                type="button"
                className="help-button"
                data-toggle="tooltip"
                data-placement="top"
                title=""
                data-original-title="The amount you want to invest, you can always add funds to your investment at any time."
              >
                <img src="images/info.png" alt="" />
              </button>
            </div>

            <div className="table-responsive transactions-list">
              <table className="table">
                <tbody>
                  <tr role="row" className="single-list">
                    <td className="time font-fix">
                      <div className="month">jul</div>
                      <div className="date">28</div>
                    </td>
                    <td>
                      <div className="heading font-fix">
                        Withdraw to Bitcoin
                      </div>
                      <div className="value">
                        1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX
                      </div>
                    </td>
                    <td>
                      <div className="heading font-fix">-0.010441 BTC</div>
                      <div className="value">-$28.10</div>
                    </td>
                  </tr>
                  <tr role="row" className="single-list">
                    <td className="time font-fix">
                      <div className="month">jul</div>
                      <div className="date">20</div>
                    </td>
                    <td>
                      <div className="heading font-fix">Deposit to Account</div>
                      <div className="value">Using Bitcoin</div>
                    </td>
                    <td>
                      <div className="heading font-fix">-0.010441 BTC</div>
                      <div className="value">-$28.10</div>
                    </td>
                  </tr>
                  <tr role="row" className="single-list">
                    <td className="time font-fix">
                      <div className="month">aug</div>
                      <div className="date">28</div>
                    </td>
                    <td>
                      <div className="heading font-fix">Investment Deposit</div>
                      <div className="value">
                        Deposit to [Name of Investment]
                      </div>
                    </td>
                    <td>
                      <div className="heading font-fix">-0.010441 BTC</div>
                      <div className="value">-$28.10</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
