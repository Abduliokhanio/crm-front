export const getLeads = () =>{
    
    return dispatch => {
    dispatch({type: "Leads_Loading"})
    fetch('http://localhost:3001/leads')
        .then(res => res.json())
        .then(data => dispatch({type: "Leads_Loaded", payload: data}))
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