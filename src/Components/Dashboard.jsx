import React from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Doughnut } from "react-chartjs-2";
import Saledata from "./Sale.json";
import StockData from "./Stocks.json";

function Dashboard() {
  const labels = Saledata.map((stock) => stock.August?.map((aug) => aug));
  const Stock_data = StockData.map((stocks) =>
    stocks.August?.map((augs) => augs)
  );

  const data = labels[2];
  const stockData = Stock_data[2];
  const saleValues = data.map((valu) => valu.sale);
  const stockValues = stockData.map((valu) => valu.sale);
  const stockRice = stockData.map((valu) => valu.rice);
  const sumVales = stockValues.map((sum, index) => sum - saleValues[index]);
  const sumCard = stockRice.map((value, index) => ({
    rice: value,
    sale: sumVales[index],
  }));
  console.log(saleValues);
  console.log(stockValues);
  console.log(sumVales);
  console.log(sumCard);

  return (
    <div>
      {/* dashboard Cards */}
      <div className="container-fluid dashboard_header">
        <div className="col-md-12 crads_header">
          <div className="col-md-8">
            <h4 className="stock_lable">Stock</h4>
          </div>
          <div className="col-md-4 ">
            <div style={{ float: "right", marginRight: "30px" }}>
              <i
                className="bi bi-calendar4"
                style={{
                  backgroundColor: "#4c9539",
                  padding: "4px",
                  borderRadius: "5px",
                  color: "white",
                  fontSize: "16px",
                }}
              >
                <span
                  style={{
                    marginLeft: "5px",
                    backgroundColor: "#fff",
                    color: "#000",
                    padding: "2px 25px 2px 5px",
                    borderRadius: "2px",
                    fontStyle: "normal",
                  }}
                >
                  August
                </span>
              </i>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 all_cards">
            {sumCard.map((valu) => {
              return (
                <div className="col-md-2">
                  <div className="card card_style">
                    <div style={{ display: "flex" }}>
                      <div
                        className="card-body "
                        style={{
                          padding: "5px",
                          textAlign: "left",
                          width: "75%",
                        }}
                      >
                        <h5 className="card-title card_content">{valu.rice}</h5>
                        <p className="card-text card_para">(25 kg bags)</p>
                      </div>
                      <div className="card_count">
                        {valu.sale === 0 ? (
                          <h6
                            style={{
                              color: "red",
                              fontSize: "11px",
                            }}
                          >
                            Out of the stock
                          </h6>
                        ) : valu.sale !== 0 ? (
                          <h4>{valu.sale}</h4>
                        ) : (
                          <h1>Please sign up.</h1>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* dashboard Cards end */}
      {/* dashboard Graphs*/}
      <div className="container-fluid dashboard_header">
        <div className="col-md-12 ">
          <h4>Graphs</h4>
        </div>
      </div>
      <div className="col-md-12 graph">
        <div
          className="col-md-5"
          style={{
            backgroundColor: "#fff",
            boxShadow: "0 4px 8px 0 rgba(0, 0,0, 0.2)",
            margin: "10px",
            padding: "20px",
            align: "center",
          }}
        >
          <div style={{ margin: "auto", paddingTop: "50px" }}>
            <h6 style={{ float: "left" }}>Stock</h6>
            <Bar
              data={{
                labels: [""],
                datasets: [
                  {
                    label: "Black Rice",
                    data: sumCard.map((vale) => vale.sale.sort),
                    backgroundColor: [
                      "#A3EC8F",
                      "#42BC22",
                      "#51CE2F",
                      "#3D8309",
                      "#336210",
                    ],

                    borderWidth: 0,
                    borderRadius: 15,
                  },
                  {
                    label: "Basmathi Rice",
                    data: [0],
                    backgroundColor: ["#42BC22"],
                    borderColor: ["rgba(75, 192, 192, 1)"],
                    borderWidth: 1,
                    borderRadius: 15,
                  },
                  {
                    label: "Auromatic Rice",
                    data: [50],
                    backgroundColor: ["#51CE2F"],
                    borderColor: ["rgba(75, 192, 192, 1)"],
                    borderWidth: 1,
                    borderRadius: 15,
                  },
                  {
                    label: "Bomba Rice",
                    data: [80],
                    backgroundColor: ["#3D8309"],
                    borderColor: ["rgba(75, 192, 192, 1)"],
                    borderWidth: 1,
                    borderRadius: 15,
                  },
                  {
                    label: "Brown Rice",
                    data: [100],
                    backgroundColor: ["#336210"],
                    borderColor: ["rgba(75, 192, 192, 1)"],
                    borderWidth: 1,
                    borderRadius: 15,
                  },
                ],
              }}
              height="300px"
              options={{
                indexAxis: "y",
                aspectRatio: 5,
                scales: {
                  x: {
                    grid: {
                      display: false,
                    },
                  },
                  y: {
                    beginAtZero: true,
                    stacked: true,

                    grid: {
                      display: false,
                    },
                  },
                },
                plugins: {
                  legend: {
                    position: "top",
                    labels: {
                      boxWidth: 10,
                    },
                  },
                },
              }}
            />
          </div>
        </div>
        <div
          className="col-md-2"
          style={{
            backgroundColor: "#fff",
            boxShadow: "0 4px 8px 0 rgba(0, 0,0, 0.2)",
            padding: "20px",
            margin: "10px",
            height: "300px",
          }}
        >
          <h6 style={{ float: "left" }}>Sales in June</h6>
          <Doughnut
            data={{
              labels: [
                "Bomba Rice      ",
                "Brown Rice       ",
                "Basmathi Rice    ",
                "Black Rice       ",
                "Auromatic Rice  ",
              ],
              datasets: [
                {
                  labels: [
                    "Bomba Rice      ",
                    "Brown Rice       ",
                    "Basmathi Rice    ",
                    "Black Rice       ",
                    "Auromatic Rice  ",
                  ],
                  data: [20, 20, 20, 20, 20],
                  backgroundColor: [
                    "#704E15",
                    "#AF7A1F",
                    "#2E1F05",
                    "#AF730B",
                    "#402E01",
                  ],
                  borderWidth: 0,
                },
              ],
            }}
            options={{
              aspectRatio: 0.5,
              plugins: {
                legend: {
                  position: "bottom",
                  align: "start",
                  labels: {
                    usePointStyle: true,
                    boxWidth: 5,
                    boxHeight: 5,
                  },
                },
              },
            }}
          />
        </div>
        <div
          className="col-md-2"
          style={{
            backgroundColor: "#fff",
            boxShadow: "0 4px 8px 0 rgba(0, 0,0, 0.2)",
            padding: "20px",
            margin: "10px",
            height: "300px",
          }}
        >
          <h6 style={{ float: "left" }}>Sales in July</h6>
          <Doughnut
            data={{
              labels: [
                "Bomba Rice",
                "Brown Rice",
                "Basmathi Rice",
                "Black Rice",
                "Auromatic Rice",
              ],
              datasets: [
                {
                  labels: [
                    "Bomba Rice",
                    "Brown Rice",
                    "Basmathi Rice",
                    "Black Rice",
                    "Auromatic Rice",
                  ],
                  data: [20, 20, 20, 20, 20],
                  backgroundColor: [
                    "#704E15",
                    "#AF7A1F",
                    "#2E1F05",
                    "#AF730B",
                    "#402E01",
                  ],
                  borderWidth: 0,
                },
              ],
            }}
            options={{
              aspectRatio: 0.5,
              plugins: {
                legend: {
                  position: "bottom",
                  align: "start",
                  labels: {
                    usePointStyle: true,
                    boxWidth: 5,
                    boxHeight: 5,
                  },
                },
              },
            }}
          />
        </div>
        <div
          className="col-md-2"
          style={{
            backgroundColor: "#fff",
            boxShadow: "0 4px 8px 0 rgba(0, 0,0, 0.2)",
            padding: "20px",
            margin: "10px",
            height: "300px",
          }}
        >
          <h6 style={{ float: "left" }}>Sales in August</h6>

          <Doughnut
            data={{
              labels: data.map((aug) => aug.rice),
              datasets: [
                {
                  labels: data.map((aug) => aug.rice),
                  data: data.map((aug) => aug.sale),
                  backgroundColor: [
                    "#704E15",
                    "#AF7A1F",
                    "#2E1F05",
                    "#AF730B",
                    "#402E01",
                  ],
                  borderWidth: 0,
                },
              ],
            }}
            options={{
              aspectRatio: 0.5,
              plugins: {
                legend: {
                  position: "bottom",
                  align: "start",
                  labels: {
                    usePointStyle: true,
                    boxWidth: 5,
                    boxHeight: 5,
                  },
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
