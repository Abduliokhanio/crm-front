import React, { Component } from 'react'
import {getNotes} from '../actions/notesAction'
import { connect } from "react-redux";

class NotesIndex extends Component {

    constructor(){
        super();
        this.state = {clicked: false}
        // this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount(){
        this.props.getNotes(this.props.leadId)
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
      
        let notes

        if(this.state.clicked ===false){
            notes = "false"
        }else{
            
            notes = this.props.notesArray.map(element => {
                return(
                    <div key= {element.id}>
                        <ol>
                        <li>{element.description}</li>
                        </ol>
                    </div>
                )
            })
        }
        

        return (
            <div>
                <button type="button" onClick = {this.handleClick}>Click Me!</button>
                <h1>notes here</h1>
                <h1>{notes}</h1>

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
