import axios from 'axios';

export const FETCH_APOD = 'fetch_apod';

const ROOT_URL = 'https://api.nasa.gov/planetary';
const API_KEY = '?api_key=' + process.env.REACT_APP_NASA_API_KEY;

//GET APOD
export function fetchAPOD() {
    const request = axios.get(`${ROOT_URL}/apod${API_KEY}`);
    return {
        type: FETCH_APOD,
        payload: request
    };
}
