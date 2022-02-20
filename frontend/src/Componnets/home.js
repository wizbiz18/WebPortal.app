import React, { Component } from "react";
import { Link } from "react-router-dom";
import TableCom from "./StickyHeadTable";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {}
    };
  }
  componentDidMount() {
    this.setState({
      user: JSON.parse(localStorage.getItem("user")),
      users: { loading: true }
    });
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
            <div class="col">
              <h2 calss="float-left">SETRMS Qatar Web Portal</h2>
            </div>
            <div style={{ marginRight: "100px" }}>
              <Link to="/login" className="btn btn-warning">
                Logout
              </Link>
            </div>
          </div>
        </div>
        <TableCom />
      </div>
    );
  }
}
