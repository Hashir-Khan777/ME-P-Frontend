import React from "react";
import "./Earnings.css";
import images from "../../utils/Images";
import AdminChart from "../../components/AdminChart";

export default function Earnings() {
  return (
    <div className="earningContainer">
      <div className="earningInsideContainer">
        <div className="dashboardFirstDiv">
          <div className="dashboardFirstDivChild">
            <div>
              <div className="dashboardText1">Monthly Revenue</div>
              <div className="dashboardText2">PKR 20000</div>
            </div>
            <img
              src={images.dashboard1}
              className="dashboardFirstDivChildImg"
            />
          </div>
          <div className="dashboardFirstDivChild">
            <div>
              <div className="dashboardText1">New Stores</div>
              <div className="dashboardText2">5</div>
            </div>
            <img
              src={images.dashboard2}
              className="dashboardFirstDivChildImg"
            />
          </div>
          <div className="dashboardFirstDivChild">
            <div>
              <div className="dashboardText1">New Queries</div>
              <div className="dashboardText2">3</div>
            </div>
            <img
              src={images.dashboard3}
              className="dashboardFirstDivChildImg"
            />
          </div>
          <div className="dashboardFirstDivChild">
            <div>
              <div className="dashboardText1">Canceled Orders</div>
              <div className="dashboardText2">2</div>
            </div>
            <img
              src={images.dashboard4}
              className="dashboardFirstDivChildImg"
            />
          </div>
        </div>
        <div className="earningSecondDiv">
          <div className="earinigChartDiv">
            <div className="earinigChartDivText1">
              Total Revenue <nbsp />
              <span className="earinigChartDivText1Sub">(Weekly)</span>
            </div>
            <AdminChart />
            <div className="earinigChartDivLastDiv">
              <div className="earinigChartDivLastDivDot"></div>
              <div className="earinigChartDivLastDivText">Sales</div>
            </div>
          </div>
          <div className="earningTransactionDiv">
            <div className="earningTransactionDivHeading">Transactions</div>
            <div className="earningTransactionDivChild">
              <div className="earningTransactionDivChildText1">
                Store Name
                <span className="earningTransactionDivChildText2">
                  April 18, 2022 11:01 AM
                </span>
              </div>
              <div className="earningTransactionDivAmountText">Rs. 2000</div>
            </div>
            <div className="earningTransactionDivChild">
              <div className="earningTransactionDivChildText1">
                Store Name
                <span className="earningTransactionDivChildText2">
                  April 18, 2022 11:01 AM
                </span>
              </div>
              <div className="earningTransactionDivAmountText">Rs. 2000</div>
            </div>
            <div className="earningTransactionDivChild">
              <div className="earningTransactionDivChildText1">
                Store Name
                <span className="earningTransactionDivChildText2">
                  April 18, 2022 11:01 AM
                </span>
              </div>
              <div className="earningTransactionDivAmountText">Rs. 2000</div>
            </div>
            <div className="earningTransactionDivChild">
              <div className="earningTransactionDivChildText1">
                Store Name
                <span className="earningTransactionDivChildText2">
                  April 18, 2022 11:01 AM
                </span>
              </div>
              <div className="earningTransactionDivAmountText">Rs. 2000</div>
            </div>
            <div className="earningTransactionDivChild">
              <div className="earningTransactionDivChildText1">
                Store Name
                <span className="earningTransactionDivChildText2">
                  April 18, 2022 11:01 AM
                </span>
              </div>
              <div className="earningTransactionDivAmountText">Rs. 2000</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
