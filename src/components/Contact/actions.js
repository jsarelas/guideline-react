import axios from 'axios';

export const FETCH_CONTACTLIST = 'fetch_contactlist';
export const CREATE_CONTACTUS = 'create_contactus';

const ROOT_URL = 'https://guideline-api.azurewebsites.net/api';
//const API_KEY = '?key=gl-2018';

//GET ALL CONTACTS
export function fetchContactList() {
    //const request = axios.get(`${ROOT_URL}/contactus${API_KEY}`);
    const request = axios.get(`${ROOT_URL}/contactus`);
    return {
        type: FETCH_CONTACTLIST,
        payload: request
    };
}

//CREATE
export function createContactUs(values, callback) {
    const request = axios.post(`${ROOT_URL}/contactus`, values)
        .then(() => callback());

    return {
        type: CREATE_CONTACTUS,
        payload: request
    };
}


