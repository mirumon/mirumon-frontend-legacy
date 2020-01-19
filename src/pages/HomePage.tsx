import React, { Component } from 'react'
import { withStyles, Theme, Box, Typography, IconButton } from '@material-ui/core'
import PageContent from 'UI/PageContent'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import FilterListIcon from '@material-ui/icons/FilterList'
import SearchInput from 'UI/SearchInput'
import PageWithMenu from 'UI/PageWithMenu'
import Table from 'modules/Tables/Table'
import FilterPermissionsSelector from 'UI/Home/FilterPermissionsSelector'
import ClearIcon from '@material-ui/icons/Clear';
import tableConfiguration from 'modules/Users/tableConfiguration'

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

    onFilterIconClickHandler = () => {
        this.setState({
            isPermissionsSelectorShowed: !this.state.isPermissionsSelectorShowed,
            permissionFilter: this.state.isPermissionsSelectorShowed ? this.state.permissionFilter : null
        })
    }

    onFilterChangeHandler = (value: string) => {
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
                                        onChange={this.onFilterChangeHandler}
                                    />
                                )
                            }
                            <IconButton className={[classes.inline, classes.filterIcon].join(' ')} onClick={this.onFilterIconClickHandler}>
                                {
                                    isPermissionsSelectorShowed ? <ClearIcon /> : <FilterListIcon />
                                }
                            </IconButton>
                            <SearchInput className={[classes.inline, classes.searchInput].join(' ')} placeholder="name, group"/>
                        </Box>
                    </Box>
                    <Box className={classes.tableHolder}>
                        <Table
                            configuration={tableConfiguration}
                            data={[{
                                name: {
                                    value: 'Alex'
                                },
                                right: {
                                    value: 'one'
                                },
                                groups: {
                                    value: ['one', 'two']
                                }
                            }]}
                            isCreating
                            handlers={{
                                onCreate: () => {},
                                onUpdate: () => {},
                                onDelete: () => {}
                            }}
                        />
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