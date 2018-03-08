//import _ from 'lodash';
import { FETCH_APOD } from './actions';

export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_APOD:
            return action.payload.data;
        default:
            return state;
    }
}