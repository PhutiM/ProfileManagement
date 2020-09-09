import React from 'react'
import './App.css'
import { connect } from "react-redux"
import Home from './Home'
import Details from './Detail'
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/profileDetails" component={Details} />
    </Switch>
  )
}

function mapStateToProps(state) {
  return {
    profiles: state.profiles,
    profileInfo: state.profileInfo
  };
}

export default connect(mapStateToProps)(App)