import React, { Component } from 'react'
import {getNotes, deleteNote} from '../actions/notesAction'
import { connect } from "react-redux";
import { Table, Button } from "react-bootstrap";
import { Link } from 'react-router-dom'

class NotesIndex extends Component {

    constructor(props){
        super(props);
        this.state = {clicked: false}
    }
    

    componentDidMount(){
        this.props.getNotes(document.location.href.split("/")[4])
    }
    

    handleClick = event => {
        event.preventDefault()
        if (this.state.clicked === false){
            this.setState({
                clicked: true
            })     
        }else{
            this.setState({
                clicked: false
            })
        }
    }


    handleNoteDelete = event =>{
        event.preventDefault()
        let eleId = event.target.id
        let leadId = document.location.href.split("/")[4]
        
        let noteObj = {id: eleId, lead_id : leadId}
        this.props.deleteNote(noteObj)
    }

    render() {


        let table 
        let notes

        if(this.state.clicked ===false){
            notes = "false"
            table = ""
        }else{

            if(this.props.notesArray.length !== 0){
            
            notes = this.props.notesArray.map(element => {
                
                return(
                    <tr key= {element.id}>                       
                        <td>{element.id}</td>
                        <td>{element.description}</td>
                        <td>{element.user_id}</td>
                        <td align="center"><Link to={`/leads/${document.location.href.split("/")[4]}/notes/${element.id}`}><Button variant="info">Read</Button></Link></td>
                        <td align="center"><Link to={`/leads/${document.location.href.split("/")[4]}/notes/${element.id}/edit`}><Button variant="success">Update</Button></Link></td>
                        <td align="center"><Button variant="danger" id ={element.id} onClick = {this.handleNoteDelete} >Delete</Button></td>
                    </tr>
                )
            })

            table = <div>
                <Table striped bordered hover size="sm">
                    <thead align="center">
                        <tr>
                            <th>ID #</th>
                            <th>Description</th>
                            <th>User ID</th>
                            <th>READ</th>
                            <th>UPDATE</th>
                            <th>DELETE</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {notes}
                        
                    </tbody>
                </Table>
            </div>
            }
            else {
                table = <div><h1>Sorry No Notes yet!</h1></div>
            }
        }

        return (
            <div>
                <Button variant="warning" type="button" onClick = {this.handleClick}>Click Here for Notes!</Button><br/>

                {table}

            </div>
        )
    }
}

let mapStateToProps = state => {
    
    return{
        notesArray : state.noteReducer.notes
    }
}

export default connect(mapStateToProps, {getNotes, deleteNote})(NotesIndex)
