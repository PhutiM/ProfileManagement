import * as types from '../ProfileType'
import * as Api from '../api'

export const getProfile = () => (dispatch) => {
    let url = `https://randomuser.me/api/?results=50`
    return Api.getProfiles(url).then((res) => {
        dispatch(receiveProfiles(res.results))
      })
      .catch(error => {
        console.log("Error:", error)
      })
    }

const receiveProfiles = profiles => {
    return {
        type: types.DATA_LOADED,
        profiles
    }
}

export const getProfileInfo = (profile) => (dispatch) => {
  dispatch(receiveProfile(profile))
}

const receiveProfile = profileInfo => {
  return {
      type: types.PROFILE_LOADED,
      profileInfo
  }
}