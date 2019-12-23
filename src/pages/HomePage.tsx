import React, { Component } from 'react'
import { withStyles, Theme, Box, Typography, IconButton } from '@material-ui/core'
import PageContent from 'UI/PageContent'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import FilterListIcon from '@material-ui/icons/FilterList'
import SearchInput from 'UI/SearchInput'
import PageWithMenu from 'UI/PageWithMenu'
import { ITableConfiguration } from 'modules/Tables/ITableConfiguration'
import Table from 'modules/Tables/Table'

type HomePageProps = {
    classes: any
}

const tableConfiguration:ITableConfiguration = {
    columns: [
        {
            key: 'name',
            label: 'Name',
            type: 'text',
            editable: true,
        },
        {
            key: 'right',
            label: 'Right',
            type: 'select',
            editable: true,
        },
        {
            key: 'groups',
            label: 'Groups',
            type: 'check-list',
            editable: true,
        }
    ]
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
                    <Box className={classes.tableHolder}>
                        <Table configuration={tableConfiguration} data={[{
                            name: {
                                value: 'Alex'
                            },
                            right: {
                                value: 123,
                                variants: [{
                                    id: 123,
                                    label: 'One',
                                }]
                            },
                            groups: {
                                value: [{
                                    isSelected: false,
                                    id: 123,
                                    label: 'someGroup'
                                }]
                            }
                        }]} />
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
    },
    tableHolder: {
        marginTop: '30px'
    }
}))(HomePage)