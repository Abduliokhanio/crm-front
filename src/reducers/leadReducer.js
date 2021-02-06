export default (state = {leads: [], loading: false }, action) => {
    switch (action.type){
        case "Leads_Loading":
            return {...state, loading: true}
        case "Leads_Loaded":
            return {...state, loading: false, leads:action.payload}
        default:
            return state
    }      
}