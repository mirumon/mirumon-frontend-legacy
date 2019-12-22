import React, { Component } from 'react'
import { withStyles, Theme } from '@material-ui/core'
import PageContent from 'UI/PageContent'
import PageWithMenu from 'UI/PageWithMenu'

type ServerPageProps = {
    classes: any
}

class ServerPage extends Component<ServerPageProps> {
    render() {
        return (
            <PageWithMenu>
                <PageContent>
                    Server – Coming soon...
                </PageContent>
            </PageWithMenu>
        )
    }
}

export default withStyles(({ palette }: Theme) => ({
}))(ServerPage)
