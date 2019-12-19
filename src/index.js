import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form';
import reducer from './reducers';

import App from './components/App';
import { updateHTMLOutput as outputTest} from './actions';

const rootReducer = combineReducers({
    form: formReducer,
    html: reducer
  });

const store = createStore(rootReducer);

console.log('Before:', store.getState());
store.dispatch(outputTest('hi'));
console.log('After:', store.getState());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.querySelector('#root')
);
