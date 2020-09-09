import React from 'react'
import ProfileCard from './components/ProfileCard'
import { connect } from "react-redux"
import Header from "./components/Header"
import { Grid } from '@material-ui/core'

function Home(props) {
  
  const { profiles } = props
  return (
    <Grid>
      <Header description="User Profiles"/>
      <ProfileCard profiles={profiles} />
    </Grid>
  )
}

function mapStateToProps(state) {
  return {
    profiles: state.profiles,
    profileInfo: state.profileInfo
  };
}

export default connect(mapStateToProps)(Home)