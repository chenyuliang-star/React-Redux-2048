import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './app.js';
 
import { Provider, connect } from "react-redux";
import gameStore from "./store.js";
import gameReducer from "./reducers.js";
import { newGameAction, moveUpAction, moveRightAction,
     moveDownAction, moveLeftAction, randomAction, gameSuccessAction } from './actions.js';
import { bindActionCreators } from "redux";

function mapStatesToProps(state) {
    return {
        currentScore: state.currentScore,
        bestScore: state.bestScore,
        gameMapState: state.gameMapState
    };
}

function mapdispatchToProps(dispatch) {
    return bindActionCreators({ newGameAction, moveUpAction, moveRightAction, moveDownAction, 
        moveLeftAction, randomAction, gameSuccessAction }, dispatch);
}

const AppRedux = connect(mapStatesToProps,mapdispatchToProps)(App);

ReactDOM.render(
     <Provider store = { gameStore }>
     <AppRedux />
     </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
