import React, { Component } from 'react'
import Menu from 'UI/Menu/Menu'
import { withStyles, Theme, Box, Typography, IconButton } from '@material-ui/core'
import PageContent from 'UI/PageContent'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import FilterListIcon from '@material-ui/icons/FilterList'
import SearchInput from 'UI/SearchInput'
import { connect } from 'react-redux'

type HomePageProps = {
    page: any,
    onTabChange?(selected: string): void,
    classes: any
}

class HomePage extends Component<HomePageProps> {
    render() {
        const { onTabChange, classes, page } = this.props
        return (
            <Box className={classes.root}>
                <Menu username="haspen" selectedTab={page} onTabChange={onTabChange}/>
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
            </Box>
        )
    }
}

const mapStateToProps = ({ page }: any) => ({ page })
const mapDispatchToProps = (dispatch: any) => ({ onTabChange: (selected: string) => dispatch({ type: selected }) })
const HomePageWithState = connect(mapStateToProps, mapDispatchToProps)(HomePage)

export default withStyles(({ palette }: Theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'left'
    },
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
}))(HomePageWithState)