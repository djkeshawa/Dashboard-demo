import React, { Component } from "react";
import "./header.css";
import logo from "./../../assets/sysco-logo-color.svg";

class Header extends Component {
  constructor(props){
    super(props);
    this.state = {value:"nav-elt nav-menu",menuValue:{zIndex: 1000,right: '65px', position:"absolute",display:'none'}};
  }

  onChangeDropdown(){
    if(this.state.value == "nav-elt nav-menu"){
        this.setState({value:"nav-elt nav-menu active",menuValue:{zIndex: 1000,right: '65px',position:"absolute",display:'block'}});
        
    }
    else{
        this.setState({value:"nav-elt nav-menu",menuValue:{zIndex: 1000,right: '65px', position:"absolute",display:'none'}});
    }
}

  render() {
    return (
      <div className="Header">
        <nav className="navbar navbar-expand-lg navbar-light" style={{height:'48px'}}>
          <img className="logo logo-color img-fluid" src={logo} alt="Sysco" style={{height: '40px'}} />
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
            <ul className="navbar-nav mr-auto" style={{fontSize:'0.8rem'}}>
              <li className="nav-item">
                <a className="nav-link blue-text" href="#">
                  Support
                </a>
              </li>
            </ul>
            <ul className="navbar-nav"  style = {{height:'40px'}}>
              <li className="nav-item">
              <a onClick = {(this.onChangeDropdown.bind(this))} id="nav-usernameMenu" href="#" value = {this.state.value} class={this.state.value} data-menu-content="usernameMenuContent">
            <div class="btn btn-default opco-btn" title="Dineth Jayathilaka">Selected OpCo</div>
            </a>
              </li>
              <li className="nav-item" >
                <a className="nav-link blue-text notification-icon" href="#"  style = {{height:'40px'}}>
                  <i className="fa fa-bell" aria-hidden="true"  style = {{height:'30px'}}/>
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div class="menu" style= {this.state.menuValue}>
          <div class="card bg-light mb-3" style={{width :"18rem"}}>
          <span class="dropdown-item-text">Dropdown item text</span>
  <a class="dropdown-item" href="#">Action</a>
  <a class="dropdown-item" href="#">Another action</a>
  <a class="dropdown-item" href="#">Something else here</a></div>
          </div>
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
