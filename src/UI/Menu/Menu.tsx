import React from 'react'
import { Component } from "react"
import { Box, MenuList, MenuItem, Typography, IconButton, Avatar } from '@material-ui/core'
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle'
import FolderSharedIcon from '@material-ui/icons/FolderShared'
import DevicesIcon from '@material-ui/icons/Devices'
import LinkIcon from '@material-ui/icons/Link'
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom'

type MenuProps = {
    username: string,
    onLogOut?(): void
    onTabChange?(selected: string): void
}

export default class Menu extends Component<MenuProps> {

    constructor(props: MenuProps){
        super(props)
    }

    render() {
        const { username } = this.props
        return <Box>
            <Box>
                <Avatar alt={username} src={`${process.env.PUBLIC_URL}/logo.svg`} />
                <Box>
                    <Typography>{username}</Typography>
                    <IconButton>
                        <MeetingRoomIcon />
                    </IconButton>
                </Box>
            </Box>
            <MenuList>
                <MenuItem>
                    <SupervisedUserCircleIcon />
                    <Typography variant='h5'>users</Typography>
                </MenuItem>
                <MenuItem>
                    <FolderSharedIcon />
                    <Typography variant='h5'>shared groups</Typography>
                </MenuItem>
                <MenuItem>
                    <DevicesIcon />
                    <Typography variant='h5'>devices</Typography>
                </MenuItem>
                <MenuItem>
                    <LinkIcon />
                    <Typography variant='h5'>server</Typography>
                </MenuItem>
            </MenuList>
        </Box>
    }
}