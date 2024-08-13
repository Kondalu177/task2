import React from "react";
import Stockdata from "./Stock.json";
import Sales from "./Sales.json";

function Datatable() {
  return (
    <div>
      {/* stock table  */}
      <div className="container-fluid table_header">
        <h5>Stock</h5>
      </div>

      <div className="col-md-10" style={{ margin: "auto" }}>
        <div style={{ marginTop: "20px", overflow: "overlay" }}>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Month</th>
                <th scope="col">Brown Rice</th>
                <th scope="col">Basmathi Rice</th>
                <th scope="col">Black Rice</th>
                <th scope="col">Bomba Rice</th>
                <th scope="col">Auromatic Rice</th>
              </tr>
            </thead>
            <tbody>
              {Stockdata.map((stock) => {
                return (
                  <tr key={stock.Id}>
                    <td>{stock.Month}</td>
                    <td>{stock.BrownRice}</td>
                    <td>{stock.BasmathiRice}</td>
                    <td>{stock.BlackRice}</td>
                    <td>{stock.BombaRice}</td>
                    <td>{stock.AuromaticRice}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      {/* sales table  */}
      <div className="container-fluid table_header">
        <h5>Sales</h5>
      </div>

      <div className="col-md-10" style={{ margin: "auto" }}>
        <div style={{ marginTop: "20px", overflow: "overlay" }}>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Month</th>
                <th scope="col">Brown Rice</th>
                <th scope="col">Basmathi Rice</th>
                <th scope="col">Black Rice</th>
                <th scope="col">Bomba Rice</th>
                <th scope="col">Auromatic Rice</th>
              </tr>
            </thead>
            <tbody>
              {Sales.map((sale) => {
                return (
                  <tr key={sale.Id}>
                    <td>{sale.Month}</td>
                    <td>{sale.BrownRice}</td>
                    <td>{sale.BasmathiRice}</td>
                    <td>{sale.BlackRice}</td>
                    <td>{sale.BombaRice}</td>
                    <td>{sale.AuromaticRice}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Datatable;
