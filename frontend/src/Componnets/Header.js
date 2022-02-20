import React, { Component } from "react";

export default class Header extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <div
          class="sticky-top"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgb(5, 39, 103) 0%, #3a0647 70%)",
            color: "white",
            padding: "20px 10px"
          }}
        >
          <div class="row">
            <div class="col-sm">
              <h2 calss="float-left">Setrms Qatar Web Portal</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
