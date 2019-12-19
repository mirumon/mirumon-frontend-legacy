import React, { Component } from 'react'
import Menu from 'UI/Menu/Menu'
import { withStyles, Theme, Box } from '@material-ui/core'

type HomePageProps = {
    classes: any
}

class HomePage extends Component<HomePageProps> {
    render() {
        return (
            <Box className={this.props.classes.root}>
                <Menu username="haspen"/>
                <Box className={this.props.classes.tabContent}>Users</Box>
            </Box>
        )
    }
}

export default withStyles(({ palette }: Theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'left'
    },
    tabContent: {
        overflowY: 'auto',
        maxHeight: '100vh'
    }
}))(HomePage)
