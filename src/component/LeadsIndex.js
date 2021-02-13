import React, { Component } from "react";
import { connect } from "react-redux";
import { getLeads } from "../actions/leadsAction";
import { Table, Button } from "react-bootstrap";

export class LeadsIndex extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    this.props.getLeads();
  }

  render() {
    let leads_arr = this.props.leads;

    let pgContent = leads_arr.map((element) => {
      return (
        <tr>
            <td>
                {element.id}
            </td>
            <td>
                {element.name}
            </td>
            <td>
            <Button variant="info">Read</Button>
            </td>
            <td>
            <Button  variant="success">Update</Button>
            </td>
            <td>
            <Button variant="danger">Delete</Button>
            </td>
        </tr>
      );
    });

    let leads_table = 
    <div>
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                <th>Lead Id</th>
                <th>Lead Name</th>
                <th>Read</th>
                <th>Update</th>
                <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {pgContent}
            </tbody>

        </Table>
    </div>

    return (
      <div>
        <h1>List of all the leads</h1>
        {leads_table}
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    leads: state.leadReducer.leads,
    loading: state.leadReducer.loading,
  };
};

export default connect(mapStateToProps, { getLeads })(LeadsIndex);
