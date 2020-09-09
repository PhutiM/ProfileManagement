import React from 'react'
import {Grid} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
    card: {
        left: "50%",
        margin: 100
    },
    cover: {
        width: 151,
    }
}))

export const LoadingError = () => {
    const classes = useStyles()

    return (
        <Grid className={classes.card}>
             <Typography component="h5" variant="h5">
                        No data
             </Typography>
        <img
            className={classes.cover}
            src=""
            alt="Ooops, theres not data to display"
        />
        </Grid>
    )
}

export default LoadingError


