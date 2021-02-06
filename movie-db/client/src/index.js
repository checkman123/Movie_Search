import React from "react";
import ReactDom from "react-dom";
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { Provider } from 'react-redux'   //<= keep track of global state. Can access state anywhere from app
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers'

import './index.css'

import App from "./App"

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);

serviceWorkerRegistration.register();

