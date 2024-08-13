import React from "react";
import Logo from "../assets/img/logo.png";
import "./Style.css";
import Datatable from "./Datatable";
import Dashboard from "./Dashboard";

function Home() {
  return (
    <div>
      {/* Nav bar start */}
      <nav
        className="navbar bg-body-tertiary"
        style={{ boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2" }}
      >
        <div className="container-fluid">
          <div className="logo_conatainer">
            <a className="navbar-brand" href="#" style={{ marginLeft: "20px" }}>
              <img
                src={Logo}
                alt="Logo"
                width="100"
                className="d-inline-block align-text-top"
              />
            </a>
            <div className="tab_buttons">
              <ul class="nav nav-pills " id="pills-tab" role="tablist">
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link active"
                    id="pills-home-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-home"
                    type="button"
                    role="tab"
                    aria-controls="pills-home"
                    aria-selected="true"
                    style={{
                      padding: "5px",
                      color: "#000",
                      fontWeight: "500",
                      borderRadius: "5px 5px 0 0",
                    }}
                  >
                    Dashboard
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    id="pills-profile-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-profile"
                    type="button"
                    role="tab"
                    aria-controls="pills-profile"
                    aria-selected="false"
                    style={{
                      padding: "5px",
                      color: "#000",
                      fontWeight: "500",
                      borderRadius: "5px 5px 0 0",
                    }}
                  >
                    Data Table
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="user_icon">
            <div className="">
              <i class="bi bi-person"></i>
            </div>
            <p>kathyayini</p>
          </div>
        </div>
      </nav>
      <div class="tab-content" id="pills-tabContent">
        <div
          class="tab-pane fade show active"
          id="pills-home"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
          tabindex="0"
        >
          <Dashboard />
        </div>
        <div
          class="tab-pane fade"
          id="pills-profile"
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
          tabindex="0"
        >
          <Datatable />
        </div>
      </div>
    </div>
  );
}

export default Home;
