import React, { Component } from 'react'
import { withStyles, Theme } from '@material-ui/core'
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
                    Shared groups – Coming soon...
                </PageContent>
            </PageWithMenu>
        )
    }
}

export default withStyles(({ palette }: Theme) => ({
}))(SharedGroupsPage)
