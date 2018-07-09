import React, { Component } from "react";
import "./home.css";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div class="container-fluid ">
          <div class="main-div">
            <section id="what-we-do">
              <div class="container-fluid">
                <input
                  class="form-control"
                  type="text"
                  placeholder="Search"
                  aria-label="Search"
                />
                <div class="row mt-5">
                  <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                    <div class="card">
                      <div class="card-block block-1">
                        <i
                          data-toggle="tooltip"
                          title="With supporting text below as a natural lead-in to additional content."
                          class="fas fa-info-circle info-icon"
                        />

                        <h3 class="card-title">Order</h3>
                        <ul class="list">
                          <li>Create Order</li>
                          <li>Inventory Allocation</li>
                          <li>Substitution</li>
                          <li>Samples</li>
                          <li>Vendor return</li>
                        </ul>
                        <p class="card-text" />
                        <a
                          href="javascript:void();"
                          title="Read more"
                          class="read-more"
                        >
                          more
                          <i class="fa fa-angle-double-right ml-2" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                    <div class="card">
                      <div class="card-block block-2">
                        <i
                          data-toggle="tooltip"
                          title="With supporting text below as a natural lead-in to additional content."
                          class="fas fa-info-circle info-icon"
                        />
                        <h3 class="card-title">Inventry Management</h3>
                        <ul class="list">
                          <li>Maintenance Management</li>
                          <li>Purchase order</li>
                          <li>DPR</li>
                        </ul>
                        <a
                          href="javascript:void();"
                          title="Read more"
                          class="read-more"
                        >
                          more
                          <i class="fa fa-angle-double-right ml-2" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                    <div class="card">
                      <div class="card-block block-3">
                        <i
                          data-toggle="tooltip"
                          title="With supporting text below as a natural lead-in to additional content."
                          class="fas fa-info-circle info-icon"
                        />
                        <h3 class="card-title">Profit Management</h3>
                        <ul class="list">
                          <li>Pricing</li>
                          <li>DPM</li>
                          <li>Aggreemants</li>
                          <li>Commisions</li>
                          <li>Billing and CRMS</li>
                        </ul>
                        <a
                          href="javascript:void();"
                          title="Read more"
                          class="read-more"
                        >
                          more
                          <i class="fa fa-angle-double-right ml-2" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                    <div class="card">
                      <div class="card-block block-4">
                        <i
                          data-toggle="tooltip"
                          title="With supporting text below as a natural lead-in to additional content."
                          class="fas fa-info-circle info-icon"
                        />
                        <h3 class="card-title">Financials</h3>
                        <ul class="list">
                          <li>Account Payable </li>
                          <li>Account Receivable</li>
                          <li>General Ledger</li>
                        </ul>
                        <a
                          href="javascript:void();"
                          title="Read more"
                          class="read-more"
                        >
                          more
                          <i class="fa fa-angle-double-right ml-2" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                    <div class="card">
                      <div class="card-block block-5">
                        <i
                          data-toggle="tooltip"
                          title="With supporting text below as a natural lead-in to additional content."
                          class="fas fa-info-circle info-icon"
                        />
                        <h3 class="card-title">Reports</h3>
                        <ul class="list">
                          <li>Report A</li>
                        </ul>

                        <a
                          href="javascript:void();"
                          title="Read more"
                          class="read-more"
                        >
                          more
                          <i class="fa fa-angle-double-right ml-2" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
