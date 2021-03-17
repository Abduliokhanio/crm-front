import React, { Component } from "react";
import { connect } from "react-redux";
import { getLeads, deleteLead } from "../actions/leadsAction";
import { Table, Button } from "react-bootstrap";
import { Link } from 'react-router-dom'

export class LeadsIndex extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    this.props.getLeads();
  }

  handleDelete = event => {
    let id = event.target.id
    this.props.deleteLead(id)
  }

  render() {
    let leads_arr = this.props.leads;

    let pgContent = leads_arr.map((element) => {
      
      return (
        <tr key = {element.id}>
            <td>
                {element.id}
            </td>
            <td>
                {element.name}
            </td>
            <td>
                {"Lead description..."}
            </td>
            <td align="center">
                {timeFormatter(element.created_at)}
            </td>
            <td align="center">
                {timeFormatter(element.updated_at)}
            </td>
            <td align="center">
            <Link to={`/leads/${element.id}`}><Button variant="info">Read</Button></Link>
            </td>
            <td align="center">
            <Link to={`/leads/${element.id}/edit`}><Button  variant="success">Update</Button></Link>
            </td>
            <td align="center">
            <Button variant="danger" id = {`${element.id}`} onClick = {this.handleDelete}>Delete</Button>
            </td>
        </tr>
      );
    });

    let leads_table = 
    <div>
        <Table striped bordered hover variant="dark">
            <thead align="center">
                <tr>
                <th>Lead Id</th>
                <th>Lead Name</th>
                <th>Lead Description</th>
                <th>Created At</th>
                <th>Updated At</th>
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

let timeFormatter = (timeInput) => {
  let timeArr = timeInput.split("T")
  
  let date = timeArr[0].split("-")
  let time = timeArr[1]

  let dateFormatMMDDYY = [date[1],date[2], date[0]].join("-")

  function timeFormatHHMMSS (time){ 

    let timeArr = time.split("").slice(0, -5).join("").split(":")
    
    if (timeArr[0] >= 13){
      timeArr[0] = timeArr[0] -= 12
      timeArr[0] = timeArr[0].toString()
      timeArr[3] = "PM"
    }else{
      timeArr[3] = "AM"
    }

    let maridian = timeArr.pop(1)

    return timeArr.join(":") + " " + maridian

  }
  
  return dateFormatMMDDYY+ " @ " + timeFormatHHMMSS(time)
  
}

export default connect(mapStateToProps, { getLeads, deleteLead })(LeadsIndex);
