import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography, TextField } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import { useHistory } from "react-router-dom"

const useStyles = makeStyles((theme) => ({
    card: {
        width: "500px",
        margin: "5px",
        border: '2px solid #00123d'
    },
    imageGrid: {
        borderRadius: '100%',
        border: "2px solid #520141"
    },
    profilePicture: {
        float: 'left',
        borderRadius: '100%',
        margin: "10px",
        border: "2px solid #520141"
    },
    button: {
        marginTop: 40,
    },
    cover: {
        width: 151,
    },
    container: {
        margin: '100px',
        border: "2px solid #00123d",
        width: "700px"
    },
    select: {
        width: '250px',
        margin: '20px',
        display: 'inline-block'
    },
    sortBy: {
        width: '60px',
        margin: '5px',
        display: 'inline-block'
    },
    userDetails: {
     marginTop: "20px"
    },
    heading: {
      marginBottom: "10px",
      marginLeft: 40,
      fontSize: "24px",
      fontWeight: "Bold"
    },
    topBar: {
        display: 'inline-block'
    },
    textField: {  
         width: '400px',
         marginBottom: 40,
         marginLeft: 40
    },
    selectField: {
        display: 'inline-block',
        margin: '5px',
        width: '250px',
        [theme.breakpoints.down('sm')]: {
            width: '100%'
        }
    },
}))


export const ProfileDetails = (props) => {
    const { profileInfo } = props
    const classes = useStyles()

    const history = useHistory()
    const goBack = () => {
        history.push('/')
    }

    return (
        <Grid>
            <Button variant="outlined" color="secondary" onClick={() => goBack()}>Back To Profiles</Button>
           <Grid>
           <img className={classes.profilePicture} width={250} src={profileInfo.picture.large} />
           </Grid>
            <Grid className={classes.container}>
                <Grid contai className={classes.userDetails}>
                <Grid container>
                    <Typography className={classes.heading}>Personal Details</Typography>
                    </Grid>
                    <Grid container>
                    <TextField
                        disabled
                        className={classes.textField}
                        id="outlined-disabled"
                        label="First Name"
                        defaultValue={profileInfo.name.first}
                        variant="outlined"
                    />
                    </Grid>
                    <Grid container>
                    <TextField
                        disabled
                        className={classes.textField}
                        id="outlined-disabled"
                        label="Last Name"
                        defaultValue={profileInfo.name.last}
                        variant="outlined"
                    />
                    </Grid>
                    <Grid>
                    <TextField
                        disabled
                        className={classes.textField}
                        id="outlined-disabled"
                        label="Age"
                        defaultValue={profileInfo.dob.age}
                        variant="outlined"
                    />
                    </Grid>
                    <Grid>
                    <TextField
                        disabled
                        className={classes.textField}
                        id="outlined-disabled"
                        label="Gender"
                        defaultValue={profileInfo.gender}
                        variant="outlined"
                    />
                    <Grid>
                    <TextField
                        disabled
                        className={classes.textField}
                        id="outlined-disabled"
                        label="Date of birth"
                        defaultValue={profileInfo.dob.date}
                        variant="outlined"
                    />
                    </Grid>
                    </Grid>
                </Grid>
                <Grid className={classes.userDetails}>
                <Typography className={classes.heading}>Contact Details</Typography>
                    <Grid>
                    <TextField
                        disabled
                        className={classes.textField}
                        id="outlined-disabled"
                        label="Phone"
                        defaultValue={profileInfo.phone}
                        variant="outlined"
                    />
                    </Grid>
                    <Grid>
                    <TextField
                        disabled
                        className={classes.textField}
                        id="outlined-disabled"
                        label="Cell"
                        defaultValue={profileInfo.cell}
                        variant="outlined"
                    />
                    </Grid>
                    <Grid>
                    <TextField
                        disabled
                        className={classes.textField}
                        id="outlined-disabled"
                        label="Email"
                        defaultValue={profileInfo.email}
                        variant="outlined"
                    />
                    </Grid>
                </Grid>
                <Grid className={classes.userDetails}>
                <Typography className={classes.heading}>Address Details</Typography>
                    <Grid>
                    <TextField
                        disabled
                        className={classes.textField}
                        id="outlined-disabled"
                        label="City"
                        defaultValue={profileInfo.location.city}
                        variant="outlined"
                    />
                    </Grid>
                    <Grid>
                    <TextField
                        disabled
                        className={classes.textField}
                        id="outlined-disabled"
                        label="Country"
                        defaultValue={profileInfo.location.country}
                        variant="outlined"
                    />
                    </Grid>
                    <Grid>
                    <TextField
                        disabled
                        className={classes.textField}
                        id="outlined-disabled"
                        label="Postal Code"
                        defaultValue={profileInfo.location.postcode}
                        variant="outlined"
                    />
                    </Grid>
                </Grid>
           
            </Grid>
        </Grid>
    )
}

export default ProfileDetails