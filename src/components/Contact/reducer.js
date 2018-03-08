import _ from 'lodash';
import { FETCH_CONTACTLIST } from './actions';

export default function (state = {}, action) {
    switch (action.type) {
        //case ARCHIVE_CONTACTUS:
        //    return _.omit(state, action.payload);
        //case DELETE_CONTACTUS:
        //    return _.omit(state, action.payload);
        //case FETCH_CONTACTUS:
        //    return { ...state, [action.payload.data.id]: action.payload.data };
        case FETCH_CONTACTLIST:
            return _.mapKeys(action.payload.data, 'enteredDate');
        default:
            return state;
    }
}