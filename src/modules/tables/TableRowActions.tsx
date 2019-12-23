import React, { Component } from 'react'
import { Theme, withStyles, IconButton } from '@material-ui/core'
import { TRowActionTypes } from './ITableConfiguration'
import EditIcon from '@material-ui/icons/Edit'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'

interface TableRowActionsProps {
    actions: Array<TRowActionTypes>
    classes: any
}

class TableRowActions extends Component<TableRowActionsProps> {
    render() {
        const { actions, classes } = this.props
        return (
            <td>
                { actions.includes('update') && (
                    <IconButton>
                        <EditIcon />
                    </IconButton>
                )}
                { actions.includes('delete') && (
                    <IconButton>
                        <DeleteForeverIcon />
                    </IconButton>
                )}
            </td>
        )
    }
}

export default withStyles(({ palette, typography }: Theme) => ({

}))(TableRowActions)