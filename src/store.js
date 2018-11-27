import {createStore} from "redux";
import gameReducer from "./reducers.js";

const gameStore = createStore(gameReducer);

export default gameStore;
