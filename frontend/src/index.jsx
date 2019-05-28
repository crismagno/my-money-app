import React from 'react'
import reactDOM from 'react-dom'
import { applyMiddleware, createStore } from "redux"
import { Provider } from 'react-redux'

import promise from "redux-promise";

import reducers from './main/reducers'
import App from './main/App'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
    && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = applyMiddleware(promise)(createStore)(reducers, devTools)
reactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('root')
)