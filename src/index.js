import registerServiceWorker from './registerServiceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import { IntlProvider } from 'react-intl';

import promise from 'redux-promise';
import reducers from './root_reducer';
//Redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <IntlProvider locale="en">
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </IntlProvider>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
