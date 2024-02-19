import React from "react";
import "./style.css";
import images from "../../utils/Images";
import NewOrder from "../../components/NewOrder";
import NewReviews from "../../components/NewReview";
import LineChart from "../../components/LineChart";
import DoughnutChart from "../../components/DoughnutCharts";

export default function Dashboard() {
  return (
    <div className="dashboardContainer">
      <div className="dashboardFirstDiv">
        <div className="dashboardFirstDivChild">
          <div>
            <div className="dashboardText1">Monthly Revenue</div>
            <div className="dashboardText2">PKR 20000</div>
          </div>
          <img src={images.dashboard1} className="dashboardFirstDivChildImg" />
        </div>
        <div className="dashboardFirstDivChild">
          <div>
            <div className="dashboardText1">New Orders</div>
            <div className="dashboardText2">10</div>
          </div>
          <img src={images.dashboard2} className="dashboardFirstDivChildImg" />
        </div>
        <div className="dashboardFirstDivChild">
          <div>
            <div className="dashboardText1">Pending Orders</div>
            <div className="dashboardText2">5</div>
          </div>
          <img src={images.dashboard3} className="dashboardFirstDivChildImg" />
        </div>
        <div className="dashboardFirstDivChild">
          <div>
            <div className="dashboardText1">Canceled Orders</div>
            <div className="dashboardText2">2</div>
          </div>
          <img src={images.dashboard4} className="dashboardFirstDivChildImg" />
        </div>
      </div>
      <div className="dashboardMainDiv">
        <img src={images.dashboardMainImg} className="dashboardMainImg" />
      </div>
      <div className="dashboardChartsDiv">
        <div className="dashboardCircleChartMainDiv">
          <div className="dashboardCC1Div">
            <div className="dashboardCC1Div1">
              <DoughnutChart />
            </div>
            <div className="dashboardCC1Div2">
              <div className="dashboardCC1Div2Inside">
                <div className="dashboardCC1Div2Inside1">
                  <div>Status</div>
                  <div>Numbers</div>
                </div>
                <div className="dashboardCC1Div2Inside2">
                  <div className="dashboardCC1Div2Inside2ImgDiv">
                    <img
                      className="dahhboardChartImg"
                      src={images.chartGreen}
                    />
                    <div className="dashboardCC1Div2Inside2Text1">
                      Completed Orders
                    </div>
                  </div>
                  <div className="dashboardCC1Div2Inside2Text2">28</div>
                </div>
                <div className="dashboardCC1Div2Inside2">
                  <div className="dashboardCC1Div2Inside2ImgDiv">
                    <img
                      className="dahhboardChartImg"
                      src={images.chartYellow}
                    />
                    <div className="dashboardCC1Div2Inside2Text1">
                      New Orders
                    </div>
                  </div>
                  <div className="dashboardCC1Div2Inside2Text2">10</div>
                </div>
                <div className="dashboardCC1Div2Inside2">
                  <div className="dashboardCC1Div2Inside2ImgDiv">
                    <img className="dahhboardChartImg" src={images.chatrRed} />
                    <div className="dashboardCC1Div2Inside2Text1">
                      Canceled Orders
                    </div>
                  </div>
                  <div className="dashboardCC1Div2Inside2Text2">8</div>
                </div>
              </div>
            </div>
          </div>
          <div className="dashboardCC2Div">
            <div className="dashboardCC2Div1">Monthly Overview</div>
            <div className="dashboardCC2Div2">
              <div className="dashboardCC2Div2Child">
                <div className="dashboardCC2Div2ChildImgDiv">
                  <img
                    src={images.chartEarning}
                    className="dashboardCC2Div2ChildImg"
                  />
                  <div className="dashboardCC2Div2ChildText1">Earnings</div>
                </div>
                <div className="dashboardCC2Div2ChildText2">Rs 200000</div>
              </div>
              <div className="dashboardCC2Div2Child">
                <div className="dashboardCC2Div2ChildImgDiv">
                  <img
                    src={images.chartLive}
                    className="dashboardCC2Div2ChildImg"
                  />
                  <div className="dashboardCC2Div2ChildText1">
                    Booked Rentals
                  </div>
                </div>
                <div className="dashboardCC2Div2ChildText2">4</div>
              </div>
              <div className="dashboardCC2Div2Child">
                <div className="dashboardCC2Div2ChildImgDiv">
                  <img
                    src={images.chartRental}
                    className="dashboardCC2Div2ChildImg"
                  />
                  <div className="dashboardCC2Div2ChildText1">
                    Live Equipment
                  </div>
                </div>
                <div className="dashboardCC2Div2ChildText2">5</div>
              </div>
              <div className="dashboardCC2Div2Child">
                <div className="dashboardCC2Div2ChildImgDiv">
                  <img
                    src={images.chartParts}
                    className="dashboardCC2Div2ChildImg"
                  />
                  <div className="dashboardCC2Div2ChildText1">Active Parts</div>
                </div>
                <div className="dashboardCC2Div2ChildText2">40</div>
              </div>
            </div>
          </div>
        </div>
        <div className="dashboardChatDiv2">
          <div className="dashboardChatDiv2Text">Sales overview</div>
          {<LineChart />}
        </div>
      </div>
      <div className="dashboardLastDiv">
        <div className="dashboardOrderDiv">
          {<NewOrder prop1={"Recent Orders"} />}
        </div>
        <div className="dashboardReview">
          {<NewReviews props1={"Recent Reviews"} />}
        </div>
      </div>
    </div>
  );
}
