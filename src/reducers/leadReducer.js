export default (state = {leads: [], loading: false }, action) => {
    switch (action.type){
        case "Leads_Loading":
            return {...state, loading: true}
        case "Leads_Loaded":
            return {...state, loading: false, leads:action.payload}

        case "Adding_Lead":
            return {}
        default:
            return state
    }      
}