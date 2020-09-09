import React from "react"

import { Provider } from "react-redux"
import { BrowserRouter as Router } from "react-router-dom"
import App from "./App"
import { createBrowserHistory } from "history"
import configureStore from "./configureStore"

const store = configureStore()
const history = createBrowserHistory();

function Root() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>
    );
  }
  
  export default Root;