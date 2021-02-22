import React from 'react'
import { useEffect, useState } from 'react';

function ReadLead(props) {
    let lead_id = props.match.params.id

    useEffect(() => {
        getLead(lead_id)
    })

    let [lead, setlead] = useState([])

    let getLead = (id) => {
       fetch(`http://localhost:3001/leads/${id}`)
        .then(resp => resp.json())
        .then(info => {
            setlead(info)
        }) 
    }
    

    return (
        <div>
            <h1>{lead.id}</h1>
            <h1>{lead.name}</h1>
        </div>
    )
}

export default ReadLead
