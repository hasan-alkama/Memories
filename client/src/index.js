import React from 'react';
import ReactDom from 'react-dom';
import App from "./App";
import Reducer from "./reducers";
import { Provider} from "react-redux";
import {createStore,applyMiddleware,compose} from "redux";
import thunk from "redux-thunk";

const store = createStore(Reducer,compose(applyMiddleware(thunk)));

ReactDom.render(
    <Provider store={store}>
     <App/>
    </Provider>
,document.getElementById('root')
)