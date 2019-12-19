import React, { Component } from 'react'
import Menu from 'UI/Menu/Menu'
import { withStyles, Theme, Box } from '@material-ui/core'
import PageContent from 'UI/PageContent'

type HomePageProps = {
    classes: any
}

class HomePage extends Component<HomePageProps> {
    render() {
        return (
            <Box className={this.props.classes.root}>
                <Menu username="haspen"/>
                <PageContent>
                    Users
                </PageContent>
                <Box className={this.props.classes.tabContent}></Box>
            </Box>
        )
    }
}

export default withStyles(({ palette }: Theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'left'
    }
}))(HomePage)
