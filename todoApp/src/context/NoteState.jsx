import NoteContext from "./notecontext";

const NoteState = (props) => {
    const state = {
        "name" : "Aftab",
        "age" : "24"
    }

    return (
        <NoteContext.Provider value={state}>
            {props.children}
        </NoteContext.Provider>
    )
}

// For test we added console.log in TodoItem where it is using the
// state we can also declare state and function here and make it powerful

export default NoteState;

