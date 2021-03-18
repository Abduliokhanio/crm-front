export const getLeads = () =>{
    return dispatch => {
    dispatch({type: "Leads_Loading"})
    fetch('http://localhost:3001/leads')
        .then(res => res.json())
        .then(data => dispatch({type: "Leads_Loaded", payload: data}))
    }
}

export const getLead = (id) => {
    return dispatch => {
        fetch(`http://localhost:3001/leads/${id}`)
        .then(resp => resp.json())
        .then(info => dispatch({type: "Lead_Loaded", payload: info})) 
    }
 }

export const addLead = (lead) => {
    return dispatch => {
        dispatch({type: "Adding_Lead"})
        let config = {
            method : 'POST',
            headers:{ // lets us application what kind of data we are sending/ recieving
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(lead)
        } 

        fetch('http://localhost:3001/leads', config)
        .then(resp => resp.json())
        .then(lead => {dispatch({type: "Lead_added", payload: lead})})
    }
}

export const updateLead = (lead) => {    
    return dispatch => {
        let leadModifiedForDb = {name: lead.nameOfLead, user_id: "1"}

        let config = {
            method: 'PATCH',
            headers:{ //Lets our applciation know that we are sending and recieving JSON
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(leadModifiedForDb)
        }
        
        fetch(`http://localhost:3001/leads/${lead.idOfLead}`, config)
        .then(() => dispatch({type: "Lead_EDITED", payload: lead}))
    }
}

export const deleteLead = (id) => {
    return dispatch => {

        let config = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json', 
                'Accept': 'application/json' 
            }
        }
        
        fetch(`http://localhost:3001/leads/${id}`, config)
        .then(() => dispatch({type: "LEAD_DELETED", payload: id}))
        
    }
}