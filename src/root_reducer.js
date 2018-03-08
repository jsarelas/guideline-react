import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import BlogReducer from './components/Blog/reducer';
import ContactUsReducer from './components/Contact/reducer';
import NASAReducer from './components/NASA/reducer';
import todos from './components/ToDo/reducers/todo';
import visibilityFilter from './components/ToDo/reducers/visibilityFilter';

const rootReducer = combineReducers({
    todos,
    visibilityFilter,
    nasaAPOD: NASAReducer,
    contactList: ContactUsReducer,
    posts: BlogReducer,
    form: formReducer
});

export default rootReducer;