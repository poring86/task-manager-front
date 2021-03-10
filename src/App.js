import React from 'react'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk';

import Router from './routes'
import loginReducer from './store/reducers/login'


const rootReducer = combineReducers({
    login: loginReducer
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, thunk)))


const App = () => {
    return (
        <Provider store={store}>
            <Router />
        </Provider>
    )
}

export default App;
