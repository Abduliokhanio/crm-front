export const getNotes = (id) => {
    return dispatch => {
        fetch(`http://localhost:3001/leads/${id}/notes`)
        
        .then(res => res.json())
        .then(notesArray => dispatch({type: "Notes_Loaded", payload: notesArray}))
    }
}