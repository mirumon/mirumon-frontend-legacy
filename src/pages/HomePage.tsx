import React, { Component } from 'react'
import { withStyles, Theme, Box, Typography, IconButton } from '@material-ui/core'
import PageContent from 'UI/PageContent'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import FilterListIcon from '@material-ui/icons/FilterList'
import SearchInput from 'UI/SearchInput'
import PageWithMenu from 'UI/PageWithMenu'
import { ITableConfiguration } from 'modules/Tables/ITableConfiguration'
import Table from 'modules/Tables/Table'
import FilterPermissionsSelector from 'UI/Home/FilterPermissionsSelector'
import ClearIcon from '@material-ui/icons/Clear';


const tableConfiguration:ITableConfiguration = {
    rows: {
        actions: ['create', 'update', 'delete'],
    },
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
            options: {
                default: 'one',
                variants: [
                    {
                        id: 'one',
                        label: 'One'
                    },
                    {
                        id: 'two',
                        label: 'Two'
                    },
                ]
            }
        },
        {
            key: 'groups',
            label: 'Groups',
            type: 'check-list',
            editable: true,
            options: {
                variants: [
                    {
                        id: 'one',
                        label: 'One-group'
                    },
                    {
                        id: 'two',
                        label: 'Two-group'
                    },
                ]
            }
        }
    ]
}

type HomePageProps = {
    classes: any
}

interface HomePageState {
    isPermissionsSelectorShowed: boolean
    permissionFilter: string | null
}

class HomePage extends Component<HomePageProps, HomePageState> {

    constructor(props: HomePageProps){
        super(props)
        this.state = {
            isPermissionsSelectorShowed: false,
            permissionFilter: null
        }
    }

    handleFilterIconClick = () => {
        this.setState({
            isPermissionsSelectorShowed: !this.state.isPermissionsSelectorShowed,
            permissionFilter: this.state.isPermissionsSelectorShowed ? this.state.permissionFilter : null
        })
    }

    handleFilterChange = (value: string) => {
        this.setState({ permissionFilter: value })
    }

    render() {
        const { classes } = this.props
        const { isPermissionsSelectorShowed, permissionFilter } = this.state
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
                            {
                                isPermissionsSelectorShowed && (
                                    <FilterPermissionsSelector
                                        className={classes.permissionsSelector}
                                        value={permissionFilter}
                                        variants={[
                                            {
                                                value: 'only-users',
                                                label: 'only Users'
                                            },
                                            {
                                                value: 'only-admin',
                                                label: 'only Admins'
                                            }
                                        ]}
                                        onChange={this.handleFilterChange}
                                    />
                                )
                            }
                            <IconButton className={[classes.inline, classes.filterIcon].join(' ')} onClick={this.handleFilterIconClick}>
                                {
                                    isPermissionsSelectorShowed ? <ClearIcon /> : <FilterListIcon />
                                }
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
                                value: 'one'
                            },
                            groups: {
                                value: ['one', 'two']
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
    },
    permissionsSelector: {
        display: 'inline-block',
    },
    filterIcon: {
        marginRight: 20
    }
}))(HomePage)