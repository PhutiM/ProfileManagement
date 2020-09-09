import React from 'react'
import ProfileDetails from './components/ProfileDetails'
import { connect } from "react-redux"
import Header from "./components/Header"
import { Grid } from '@material-ui/core'

function Home(props) {
  
  const { profileInfo } = props
  return (
    <Grid>
      <Header description="View user profile"/>
      <ProfileDetails profileInfo={profileInfo} />
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