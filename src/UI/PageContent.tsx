import React, { Component } from 'react'
import { withStyles, Theme, Box } from '@material-ui/core'

type PageContentProps = {
    classes: any
}

class PageContent extends Component<PageContentProps> {
    render() {
        return (
            <Box className={this.props.classes.root}>
                {this.props.children}
            </Box>
        )
    }
}

export default withStyles(({ palette }: Theme) => ({
    root: {
        boxSizing: 'border-box',
        padding: '0 2.5vw',
        overflowY: 'auto',
        maxHeight: '100vh'
    }
}))(PageContent)
