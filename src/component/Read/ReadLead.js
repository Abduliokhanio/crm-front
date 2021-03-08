import React from 'react'
import { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { getLead } from "../../actions/leadsAction";
import {getNotes} from "../../actions/notesAction"

function ReadLead(props) {
    let lead_id = props.match.params.id

    useEffect(() => {
        singleLead(lead_id)
        notesForLead(lead_id)
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

    let notesForLead = (id) => {
        props.getNotes(id)  
        let notes = props.leadNotes.map((note) => {
            return(
                <div>
                    <h1>{note.description}</h1>
                </div>
                )    
        })

        return(
            <div>
                <h3>{notes}</h3>    
            </div>
        )
    }

    // let content = () => {
    //     let arr = [1,2,3,4,5,6]
    //     let disp = arr.map((ele) => {
    //         return(
    //         <div>
    //             <h1>{ele}</h1>
    //         </div>)
    //     })

    //     return(
    //         <div>
    //             {disp}
    //         </div>
    //     )
    
    // }

    return (
        <div>
            <h1>{`Id : ${props.singleLead.id}`}</h1>
            <h1>{`Name : ${props.singleLead.name}`}</h1>
            <hr/>
            {formForNotes()}
            <hr/>
            {notesForLead()}
            
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        singleLead : state.leadReducer.singleLead,
        leadNotes : state.noteReducer.notes
    };
  };

export default connect(mapStateToProps, { getLead,getNotes })(ReadLead);
