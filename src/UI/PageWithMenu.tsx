import React, { Component } from 'react'
import Menu from 'UI/Menu/Menu'
import { withStyles, Theme, Box, Typography, IconButton } from '@material-ui/core'
import { connect } from 'react-redux'

type PageWithMenuProps = {
    page: any,
    onTabChange?(selected: string): void,
    classes: any
}

class PageWithMenu extends Component<PageWithMenuProps> {
    render() {
        const { classes, children, onTabChange, page } = this.props
        return (
            <Box className={classes.root}>
                <Menu username="haspen" selectedTab={page} onTabChange={onTabChange}/>
                {children}
            </Box>
        )
    }
}

const mapStateToProps = ({ page }: any) => ({ page })
const mapDispatchToProps = (dispatch: any) => ({ onTabChange: (selected: string) => dispatch({ type: selected }) })
const withState = connect(mapStateToProps, mapDispatchToProps)(PageWithMenu)

export default withStyles(({ palette }: Theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'left'
    }
}))(withState)