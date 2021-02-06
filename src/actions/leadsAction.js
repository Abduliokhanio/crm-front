export const getLeads = () =>{
    
    return dispatch => {
    dispatch({type: "Leads_Loading"})
    fetch('http://localhost:3001/leads')
        .then(res => res.json())
        .then(data => dispatch({type: "Leads_Loaded", payload: data}))
    }
}