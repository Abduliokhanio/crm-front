export default (state = {leads: [], singleLead: [], loading: false }, action) => {
    switch (action.type){

        case "Lead_Loading":
            return {...state, loading: true}
        case "Lead_Loaded":
            return {...state, loading: false, singleLead:action.payload}

        case "Leads_Loading":
            return {...state, loading: true}
        case "Leads_Loaded":
            return {...state, loading: false, leads:action.payload}

        case "Adding_Lead":
            return {...state, loading:false, lead: action.payload}
        case "Lead_added":
            return{...state, loading:false, leads: [...state.leads, action.payload] }
        
        default:
            return state
    }      
}