import React, { Component } from "react";
import styled from 'styled-components';
import DataTable from "react-data-table-component";
import { css } from '@emotion/core';
import { ScaleLoader } from 'react-spinners';

const columns = [
  {
    name: "Date",
    selector: "Date"
  },
  {
    name: "Day",
    selector: "Day"
  },
  {
    name: "Net Amount",
    selector: "NetAmount"
  },
  {
    name: "Quantity",
    selector: "QTY"
  },
  {
    name: "Invoice Count",
    selector: "InvoiceCount"
  },
  {
    name: "Average Trans Unite",
    selector: "AvarageTransUnite"
  },
  {
    name: "Avarage Trans Value",
    selector: "AvargeTransValue"
  },
  {
    name: "Visitors Count",
    selector: "VistorCount"
  },
  {
    name: "Visitors Convesation Rate",
    selector: "VistorConversationRate"
  }
];
const rowTheme = {
  header: {
    fontSize: "12px",
    fontColorActive: "FFFFFF",
    fontColor: "#FFFFFF",
    backgroundColor: "#363640"},
  rows: {
    spacing: 'spaced',
    spacingBorderRadius: '10px',
    spacingMargin: '3px',

    borderColor: 'rgba(0,0,0,.12)',
    height: '52px',
  },
  cells: {
    cellPadding: '48px',
  },
};
const override = css`
    display: block;
    margin: 50px auto;
    border-color: red;
`;
const TextField = styled.input`
  height: 32px;
  width: 300px;
  border-radius: 3px;
  border: 1px solid #e5e5e5;
  padding: 16px;
  margin: 16px;
  &:hover {
    cursor: pointer;
  }
`;

const Filter = ({ onFilter }) => (
  <TextField
    id="Date"
    type="search"
    role="search"
    placeholder="Search Date"
    onChange={e => onFilter(e.target.value)}
  />
);

export default class TableCom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Rows: [],
      filterText:'',
      isloading: true
    };

  }
  componentDidMount() {
    fetch("/api/StoreReport")
      .then(response => response.json()).then((rows) => {
        console.log(rows);
        console.log(rows.length);
        this.setState({
          Rows: rows,
          isloading: false
        });
      }).catch(error=>{
        console.log(error);
        console.log(error.length);
        this.setState({
          Rows: [],
          isloading: false
        });
      }
      )
  };

  render() {
    const filteredItems = this.state.Rows.filter(item => item.Date.includes(this.state.filterText));
    const loaded = !this.state.isloading;
    let com;
    if (loaded) {
      com = <DataTable
        columns={columns}
        data={filteredItems}
        pagination
        highlightOnHover
        subHeader
        subHeaderComponent={<Filter onFilter={value => this.setState({ filterText: value })} />}
        fixedHeader
        fixedHeaderScrollHeight="400px"
        customTheme={rowTheme} />
    }
    else {
      com = <ScaleLoader
        css={override}
        width="4"
        height="35"
        radius="2"
        margin="2px"
        color={'#222121'}
        loading={this.state.isloading}
      />
    }
    return (
      <div>
        {com}
      </div>
    );
  }
}
