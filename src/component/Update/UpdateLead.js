import React from 'react'
import { useEffect, useState } from 'react';
import { Form, Col, Button } from "react-bootstrap";
import { updateLead, getLead } from '../../actions/leadsAction'
import { connect } from 'react-redux'
import { Link } from "react-router-dom";


function UpdateLead(props) {

    let leadId = props.match.params.id

    useEffect(() => {
      getSingleLead(leadId)
    })

  let getSingleLead = (id) => {
     let properties = props
     props.getLead(id)
   }

    let handleSubmit = (event) => {
        event.preventDefault();
        let idOfLead = props.match.params.id
        let nameOfLead = document.getElementById("nameOfLead").value
        
        let leadObj = {idOfLead,nameOfLead}
        
        props.updateLead(leadObj) 
        document.getElementById("nameOfLead").value = ""
        // props.history.push('/leads');
    }

    return (
        <div>
        <Form onSubmit = {handleSubmit}>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Update Lead</Form.Label>
              <Form.Control type="Name of Lead" placeholder={`${props.singleLead.name}`} id= "nameOfLead"/>
            </Form.Group>

            {/* <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group> */}
          </Form.Row>

          {/* <Form.Group controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="1234 Main St" />
          </Form.Group>

          <Form.Group controlId="formGridAddress2">
            <Form.Label>Address 2</Form.Label>
            <Form.Control placeholder="Apartment, studio, or floor" />
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Control as="select" defaultValue="Choose...">
                <option>Choose...</option>
                <option>...</option>
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control />
            </Form.Group>
          </Form.Row>

          <Form.Group id="formGridCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group> */}

          <Button variant="primary" type="submit">Submit</Button>
          <Link to="/leads" type="submit">Back</Link>
        </Form>
      </div>
    )
}

let mapStateToProps = (state) => {
  return {
    singleLead: state.leadReducer.singleLead
  };
};

export default connect(mapStateToProps, {updateLead, getLead})(UpdateLead)

