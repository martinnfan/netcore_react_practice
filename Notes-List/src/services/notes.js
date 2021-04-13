import { ActionCreators } from '../redux/notesReducer';
import * as axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://localhost:44323/notes'
})

export const GetNotes = async (dispatch) => {
    try {
        // api call
        const response = [
            { value: 'Can be watered', id: 1 },
            { value: 'Cannot be watered', id: 2 },
            { value: 'Needs to be watered', id: 3 },
        ];
        const {data} = await axiosInstance.get();

        dispatch(ActionCreators.setNotes(data));
    } catch {
        console.log('Error!');
    }
}

export const DeleteNote = async (dispatch, note) => {
    try {
        // api call
        const { data } = await axiosInstance.delete(`/${note.id}`);
        dispatch(ActionCreators.deleteNote(note));
    } catch {
        console.log('Error!');
    }
}

export const NewNote = async (dispatch, note) => {
    try {
        // api call
        const { data } = await axiosInstance.post('', note)
        //const response = { value: note, id: 1 };
        dispatch(ActionCreators.newNote(data));
    } catch {
        console.log('Error!');
    }
}

export const EditNote = async (dispatch, note) => {
    try {
        // api call
        await axiosInstance.put('', note);
        //const response = { value: note, id: 1 };
        dispatch(ActionCreators.editNote(note));
    } catch {
        console.log('Error!');
    }
}