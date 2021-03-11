import React, { Component } from 'react'
import {getNote} from '../../actions/notesAction'
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class ReadDes extends Component {

    constructor(props){
        super(props)
    }

    componentDidMount(){
        let leadId = document.location.href.split("/")[4]
        let NoteId = document.location.href.split("/")[6]

        let noteInfo = {lead_id : leadId, note_id : NoteId}

        this.props.getNote(noteInfo)
    }

    render() {
        let leadId = document.location.href.split("/")[4]
        let NoteId = document.location.href.split("/")[6]
        
        return (
            <div>
                <Link to = {`/leads/${this.props.singleNote.lead_id}/`}>Back</Link>
                <h1>{`Lead id: ${this.props.singleNote.lead_id}`}</h1>
                <h1>{`User id: ${this.props.singleNote.user_id}`}</h1>
                <h1>{`Note id: ${this.props.singleNote.id}`}</h1>
                <h1>{`Note Des: ${this.props.singleNote.description}`}</h1>
            </div>
        )
    }
}

let mapStateToProps = state => {
    return {
        singleNote : state.noteReducer.singleNote
    }
}

export default connect(mapStateToProps, {getNote})(ReadDes)

