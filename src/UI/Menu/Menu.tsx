import React, { Component } from 'react'
import { Box, MenuList, MenuItem, Typography, IconButton, Avatar, withStyles, Theme } from '@material-ui/core'
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle'
import FolderSharedIcon from '@material-ui/icons/FolderShared'
import DevicesIcon from '@material-ui/icons/Devices'
import LinkIcon from '@material-ui/icons/Link'
import CurrentUser from './CurrentUser'


type MenuProps = {
    username: string,
    selectedTab: string,
    onLogOut?(): void,
    onTabChange?(selected: string): void,
    classes: any
}

class Menu extends Component<MenuProps> {
    render() {
        const { selectedTab, username, onLogOut, onTabChange, classes } = this.props
        return <Box className={classes.root}>
            <Box className={classes.avatarAndCurrentUser}>
                <Avatar
                    alt={username}
                    src={`${process.env.PUBLIC_URL}/logo.svg`}
                    className={classes.avatar}
                />
                <CurrentUser username={username} onLogOut={onLogOut} />
            </Box>
            <MenuList className={classes.list}>
                {[
                    {
                        type: 'HomePage',
                        icon: <SupervisedUserCircleIcon className={classes.icon}/>,
                        value: 'users'
                    },
                    {
                        type: 'SharedGroupsPage',
                        icon: <FolderSharedIcon className={classes.icon}/>,
                        value: 'shared groups'
                    },
                    {
                        type: 'DevicesPage',
                        icon: <DevicesIcon className={classes.icon}/>,
                        value: 'devices'
                    },
                    {
                        type: 'ServerPage',
                        icon: <LinkIcon className={classes.icon}/>,
                        value: 'server'
                    }
                ].map(({ type, icon, value }) => (
                    <MenuItem key={`Menu:${type}:${value}`} style={{opacity: selectedTab === type ? 1 : .7}} onClick={() => onTabChange && onTabChange(type)}>
                        <>{[
                            icon,
                            <Typography style={{fontWeight: selectedTab === type ? 'bold' : 'normal'}}>{value}</Typography>
                        ]}</>
                    </MenuItem>
                ))}
            </MenuList>
        </Box>
    }
}

export default withStyles(({ palette }: Theme) => ({
    root: {
        height: '100vh',
        background: palette.secondary.main,
        padding: '30px 10px',
        textAlign: 'center',
        boxSizing: 'border-box',
        borderRight: `1px solid ${palette.primary.dark}`
    },
    avatarAndCurrentUser: {
        marginBottom: 10
    },
    avatar: {
        display: 'inline-block',
        background: palette.primary.dark,
        width: 130,
        height: 130,
        marginBottom: 20
    },
    list: {
        color: palette.text.secondary,
        
    },
    icon: {
        marginRight: 10
    }
}))(Menu)
