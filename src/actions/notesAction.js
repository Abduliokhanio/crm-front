export const getNotes = (id) => {
    return dispatch => {
        dispatch({type: "LOADING_Notes"})
        fetch(`http://localhost:3001/leads/${id}/notes`)
        
        .then(res => res.json())
        .then(notesArray => dispatch({type: "Notes_Loaded", payload: notesArray}))
    }
}

export const addNote = (note) => {
    return dispatch => {
        dispatch({type: "Adding_Note"})
        let config = {
            method : 'POST',
            headers:{ // lets us application what kind of data we are sending/ recieving
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(note)
        } 

        
        
        fetch(`http://localhost:3001/leads/${note.lead_id}/notes`, config)
        .then(resp => resp.json())
        .then(note => {dispatch({type: "Note_added", payload: note})})
    }
}

export const getNote = (noteInfo) => {
    return dispatch => {
        
        dispatch({type: "Note_Loading"})
        
        fetch(`http://localhost:3001/leads/${noteInfo.lead_id}/notes/${noteInfo.note_id}`)
        .then(res => res.json())
        .then(info => dispatch({type: "Note_Loaded", payload: info}))
    }
}

export const updateNote = (note) =>{
    return dispatch => {
        let config = {
            method : 'PATCH',
            headers:{ // lets us application what kind of data we are sending/ recieving
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(note)
        } 
        
        fetch(`http://localhost:3001/leads/${note.lead_id}/notes/${note.note_id}`, config)
        .then(() => dispatch({type: "note_EDITED", payload: note}))
    }
}

export const deleteNote = (note) =>{
    return dispatch => {
        let config = {
            method : "DELETE",
            headers: {
                'Content-Type': 'application/json', 
                'Accept': 'application/json' 
            }
        }

        fetch(`http://localhost:3001/leads/${note.lead_id}/notes/${note.id}`, config)
        .then(() => dispatch({type: "Note_DELETED", payload: note.id}))

    }
}