import React from 'react'
import { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { getLead } from "../../actions/leadsAction";
import {getNotes} from "../../actions/notesAction"
import NotesIndex from "../NotesIndex"

function ReadLead(props) {
    let lead_id = props.match.params.id

    useEffect(() => {
        singleLead(lead_id)
        
    })

    let singleLead = (id) => {
        let poo = props
        props.getLead(id)
    }

    let formForNotes = () => {
        return(
        <div>
            <h3>Form Goes here</h3>
        </div>
        )
    }

    return (
        <div>
            <h1>{`Id : ${props.singleLead.id}`}</h1>
            <h1>{`Name : ${props.singleLead.name}`}</h1>
            <hr/>
            {formForNotes()}
            <hr/>
            {/* {notesForLead()}
            <hr/> */}
            {<NotesIndex/>}
            
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        singleLead : state.leadReducer.singleLead,
    };
  };

export default connect(mapStateToProps, { getLead,getNotes })(ReadLead);
