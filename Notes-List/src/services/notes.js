import { ActionCreators } from '../redux/notesReducer';

export const GetNotes = async (dispatch) => {
    try {
        // api call
        const response = [
            { value: 'Can be watered', id: 1 },
            { value: 'Cannot be watered', id: 2 },
            { value: 'Needs to be watered', id: 3 },
        ];

        dispatch(ActionCreators.setNotes(response));
    } catch {
        console.log('Error!');
    }
}

export const DeleteNote = async (dispatch, note) => {
    try {
        // api call
        dispatch(ActionCreators.deleteNote(note));
    } catch {
        console.log('Error!');
    }
}

export const NewNote = async (dispatch, note) => {
    try {
        // api call
        const response = { value: note, id: 1 };
        dispatch(ActionCreators.newNote(response));
    } catch {
        console.log('Error!');
    }
}

export const EditNote = async (dispatch, note) => {
    try {
        // api call
        const response = { value: note, id: 1 };
        dispatch(ActionCreators.editNote(response));
    } catch {
        console.log('Error!');
    }
}