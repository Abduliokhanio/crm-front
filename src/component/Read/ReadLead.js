import React from 'react'
import { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { getLead } from "../../actions/leadsAction";
import {getNotes} from "../../actions/notesAction"
import NotesIndex from "../NotesIndex"
import CreateFormDes from '../Create/CreateFormDes'

function ReadLead(props) {
    let lead_id = props.match.params.id

    useEffect(() => {
        singleLead(lead_id)
    },[]) 
    //simulate CDM i need the empty brackets 
    //inside the brakets you can put the variable changes then it will update
     

    let singleLead = (id) => {
        let poo = props
        props.getLead(id)
    }

    return (
        <div>
            <h1>{`Id : ${props.singleLead.id}`}</h1>
            <h1>{`Name : ${props.singleLead.name}`}</h1>
            <hr/>
            {<CreateFormDes/>}
            <hr/>
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
