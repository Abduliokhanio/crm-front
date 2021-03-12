import React, { Component } from 'react'
import { Form, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {getNote, updateNote} from '../../actions/notesAction'

class UpdateNote extends Component {

    constructor(props){
        super(props)
        
        this.state = { note_des : props.singleNote.description}
    }

    componentDidMount(){
        let leadId = document.location.href.split("/")[4]
        let noteId = document.location.href.split("/")[6]

        let noteInfo = {lead_id: leadId, note_id: noteId}
        this.props.getNote(noteInfo)
        
    }

    handleSubmit = (event) =>{
        event.preventDefault()
        //desc / user Id / lead Id 
        let leadId = document.location.href.split("/")[4]
        let noteId = document.location.href.split("/")[6]

        let noteObj = {description: this.state.note_des, user_id: 1, lead_id: leadId, note_id: noteId}

        this.props.updateNote(noteObj)
        
        document.getElementById("des").value = ""
        
    }

    updateDes = (event) => {
      this.setState({note_des: event.target.value});
    }
    
    render() {

        return (
            <div>
            <Form onSubmit = {this.handleSubmit}>
              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label>Update Note</Form.Label>
                  <Form.Control type="Name of Lead" placeholder={`${this.state.note_des}`} id= "des" onChange = {this.updateDes}/>
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
              <Link to={`/leads/${this.props.match.url.split("/")[2]}`} type="submit">Back</Link>
            </Form>
    
          </div>
        )
    }
}

let mapStateToProps = state =>{
  
    return{
        singleNote : state.noteReducer.singleNote
    }
}

export default connect(mapStateToProps, {getNote,updateNote})(UpdateNote)
