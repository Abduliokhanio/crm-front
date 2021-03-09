import React, { Component } from 'react'
import {getNotes} from '../actions/notesAction'
import { connect } from "react-redux";
import { Table, Button } from "react-bootstrap";

class NotesIndex extends Component {

    constructor(props){
        super(props);
        this.state = {clicked: false}
    }

    componentDidMount(){
        this.props.getNotes(document.location.href.split("")[28])
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

    render() {


        let table 
        let notes

        if(this.state.clicked ===false){
            notes = "false"
            table = "false"
        }else{
            
            notes = this.props.notesArray.map(element => {
                console.log(element)
                return(
                    <tr key= {element.id}>                       
                        <td>{element.id}</td>
                        <td>{element.description}</td>
                        <td>{element.user_id}</td>
                    </tr>
                )
            })

            table = <div>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>ID #</th>
                            <th>Description</th>
                            <th>User ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {notes}
                        
                    </tbody>
                </Table>
            </div>
        }

        return (
            <div>
                <button type="button" onClick = {this.handleClick}>Click Here for Notes!</button><br/>

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

export default connect(mapStateToProps, {getNotes})(NotesIndex)
