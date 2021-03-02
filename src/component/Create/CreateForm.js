import React, { Component } from "react";
import { Form, Col, Button } from "react-bootstrap";
import { addLead } from '../../actions/leadsAction'
import { connect } from 'react-redux'
import { Link } from "react-router-dom";

class CreateForm extends Component {
    state = {
        name: ""
    }

    handleSubmit = (event)=>{
        event.preventDefault()
        
        let lead = {name: this.state.name, user_id: "1"}
        this.props.addLead(lead)

        document.getElementById("nameOfLead").value = ""
        this.setState({
            name: ""
        })

        this.props.history.push('/leads');
        
    }

    handleChangeNameOfLead = (event) => {
        this.setState({
            name: event.target.value
        }) 
    }


  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Name of Lead</Form.Label>
              <Form.Control id = "nameOfLead" type="Name of Lead" placeholder="Enter Name of Lead" onChange={this.handleChangeNameOfLead}/>
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
    );
  }
}

export default connect(null, {addLead})(CreateForm);
