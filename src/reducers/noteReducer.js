export default (state = {notes: [], singleNote: [], loading: false }, action) => {
    switch (action.type){

        case "Note_Loading":
            return {...state, loading: true}
        case "Note_Loaded":
            return {...state, loading: false, singleNote:action.payload}

        case("LOADING_Notes"):
            return {...state, loading:true}
        case "Notes_Loaded":
            return {...state, loading: false, notes: action.payload}

        case "Adding_Note":
            return {...state, loading:false, note: action.payload}
        case "Note_added":
            return{...state, loading:false, notes: [...state.notes, action.payload] }

        default:
            return state
    }
}