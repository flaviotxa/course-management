import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";

export default function configureStore(initalState) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE___ || compose; //add support for Redux dev tools
  return createStore(
    rootReducer,
    initalState,
    composeEnhancers(applyMiddleware(reduxImmutableStateInvariant()))
  );
}
