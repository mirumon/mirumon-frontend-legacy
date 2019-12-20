import React, { Component } from 'react'
import Menu from 'UI/Menu/Menu'
import { withStyles, Theme, Box, Typography, IconButton } from '@material-ui/core'
import PageContent from 'UI/PageContent'
import PageWithMenu from 'UI/PageWithMenu'

type SharedGroupsPageProps = {
    classes: any
}

class SharedGroupsPage extends Component<SharedGroupsPageProps> {
    render() {
        return (
            <PageWithMenu>
                <PageContent>
                    Shared Groups
                </PageContent>
            </PageWithMenu>
        )
    }
}

export default withStyles(({ palette }: Theme) => ({
}))(SharedGroupsPage)
