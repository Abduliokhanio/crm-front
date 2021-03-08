export default (state = {notes: [], singleNote: [], loading: false }, action) => {
    switch (action.type){

        case "Notes_Loaded":
            return {...state, loading: false, notes: action.payload}

        default:
            return state
    }
}