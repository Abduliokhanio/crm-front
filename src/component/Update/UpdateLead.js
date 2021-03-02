import React from 'react'
import { useEffect, useState } from 'react';
import { Form, Col, Button } from "react-bootstrap";
import { updateLead } from '../../actions/leadsAction'
import { connect } from 'react-redux'


function UpdateLead(props) {

   let leadId = props.match.params.id
    
    useEffect(() => {
         console.log(leadId)
    })


    let handleSubmit = (event) => {
        event.preventDefault();
        let idOfLead = props.match.params.id
        let nameOfLead = document.getElementById("nameOfLead").value
        
        let leadObj = {idOfLead,nameOfLead}
        
        props.updateLead(leadObj) 

        document.getElementById("nameOfLead").value = ""
    }

    return (
        <div>
        <Form onSubmit = {handleSubmit}>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Update Lead</Form.Label>
              <Form.Control type="Name of Lead" placeholder="Enter Name of Lead" id= "nameOfLead"/>
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
        </Form>
      </div>
    )
}

export default connect(null, {updateLead})(UpdateLead)

