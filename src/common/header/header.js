import React, { Component } from "react";
import "./header.css";
import logo from "./../../assets/sysco-logo-color.svg";

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <nav className="navbar navbar-expand-lg navbar-light">
          <img className="logo logo-color img-fluid" src={logo} alt="Sysco" />
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div id="navbarNavDropdown" className="navbar-collapse collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item ">
                <a className="nav-link blue-text" href="#">
                  Support
                </a>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <button type="button" className="btn btn-default opco-btn">
                  Selected OpCo
                  <i className="fa fa-angle-down" aria-hidden="true" />
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link blue-text notification-icon" href="#">
                  <i className="fa fa-bell" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="btn-group btn-breadcrumb breadcrump-div">
          <a href="#" className="btn btn-default breadcrump-item">
            <i className="fa fa-home breadcrump-item" aria-hidden="true" />
            <i
              className="fa fa-angle-right breadcrump-item breadcrump-arrow "
              aria-hidden="true"
            />
          </a>

          <a href="#" className="btn btn-default breadcrump-item">
            Finance
            <i
              className="fa fa-angle-right breadcrump-item breadcrump-arrow "
              aria-hidden="true"
            />
          </a>
          <a href="#" className="btn btn-default breadcrump-item">
            CRMS
          </a>
        </div>
      </div>
    );
  }
}

export default Header;
