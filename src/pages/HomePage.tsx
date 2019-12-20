import React, { Component } from 'react'
import { withStyles, Theme, Box, Typography, IconButton } from '@material-ui/core'
import PageContent from 'UI/PageContent'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import FilterListIcon from '@material-ui/icons/FilterList'
import SearchInput from 'UI/SearchInput'
import PageWithMenu from 'UI/PageWithMenu'

type HomePageProps = {
    classes: any
}

class HomePage extends Component<HomePageProps> {
    render() {
        const { classes } = this.props
        return (
            <PageWithMenu>
                <PageContent>
                    <Box className={classes.title}>
                        <Box>
                            <Typography variant="h4" className={[classes.inline, classes.titleText].join(' ')}>Users</Typography>
                            <IconButton className={classes.inline}>
                                <AddCircleIcon />
                            </IconButton>
                        </Box>
                        <Box>
                            <IconButton className={classes.inline}>
                                <FilterListIcon />
                            </IconButton>
                            <SearchInput className={[classes.inline, classes.searchInput].join(' ')} placeholder="name, group"/>
                        </Box>
                    </Box>
                </PageContent>
            </PageWithMenu>
        )
    }
}

export default withStyles(({ palette }: Theme) => ({
    title: {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        marginTop: '20px',
    },
    titleText: {
        marginRight: '10px'
    },
    inline: {
        display: 'inline-block',
        verticalAlign: 'middle',
    },
    searchInput: {
        width: '30vw',
        minWidth: '200px',
    }
}))(HomePage)