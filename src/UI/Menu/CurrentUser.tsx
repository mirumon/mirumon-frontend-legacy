import React, { Component } from 'react'
import { withStyles, Theme, Box, Typography, IconButton } from '@material-ui/core'
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom'

type CurrentUserProps = {
    username: string,
    onLogOut?(): void,
    classes: any
}

class CurrentUser extends Component<CurrentUserProps> {
    render() {
        const { username, classes } = this.props
        return (
            <Box className={classes.root}>
                <Typography>{username}</Typography>
                <IconButton size="small" className={classes.logOut}>
                    <MeetingRoomIcon />
                </IconButton>
            </Box>
        )
    }
}

export default withStyles(({ palette }: Theme) => ({
    root: {
        width: '100%',
        boxSizing: 'border-box',
        border: '1px solid',
        borderColor: palette.secondary.dark,
        borderRadius: '5px',
        textAlign: 'left',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: '3px 10px'
    },
    logOut: {
        color: palette.text.primary,
        padding: 0,
    }
}))(CurrentUser)