import React, { Component } from "react";
import "./footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <div class="container-fluid footer-class">
          <div class="row">
            <hr />
            <div class="col-lg-12">
              <div class="col-md-8">
                <a href="#" class="blue-text">
                  Terms of Service
                </a>{" "}
                |
                <a href="#" class="blue-text">
                  Privacy
                </a>
              </div>
              <div class="col-md-4">
                <p class="muted pull-right">
                  © 2018 Sysco. All rights reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
