import { applyMiddleware, createStore } from "redux"
import thunkMiddleware from "redux-thunk";
import { getProfile } from "./actions/ProfileActions"
import rootReducer from "./reducers/ProfileReducer"

export default function configureStore(persistedState) {
    const store = createStore(
      rootReducer,
      persistedState,
      applyMiddleware(thunkMiddleware)
    );
    let url = `https://randomuser.me/api/?results=50`
    store.dispatch(getProfile(url));
    return store;
  }