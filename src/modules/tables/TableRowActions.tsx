import React, { Component } from 'react'
import { Theme, withStyles, IconButton } from '@material-ui/core'
import { TRowActionTypes } from './ITableConfiguration'
import EditIcon from '@material-ui/icons/Edit'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'
import DoneIcon from '@material-ui/icons/Done'
import CloseIcon from '@material-ui/icons/Close'

interface EditingOptions {
    isEditing?: boolean
    onCancel?(): any
    onApply?(): any
    onEdit?(): any
}

interface TableRowActionsProps extends EditingOptions{
    actions: Array<TRowActionTypes>
    onDelete?(): any
    classes: any
}

class TableRowActions extends Component<TableRowActionsProps> {
    render() {
        const { isEditing, actions, classes, onCancel, onApply, onEdit, onDelete } = this.props
        return (
            <td className={classes.td}>
                {
                    !isEditing ? (
                        <>
                            { actions.includes('update') && (
                                <IconButton onClick={() => onEdit && onEdit()}>
                                    <EditIcon />
                                </IconButton>
                            )}
                            { actions.includes('delete') && (
                                <IconButton onClick={() => onDelete && onDelete()}>
                                    <DeleteForeverIcon />
                                </IconButton>
                            )}
                        </>
                    ) : (
                        <>
                            <IconButton className={classes.successButton} onClick={() => onApply && onApply()}>
                                <DoneIcon />
                            </IconButton>
                            <IconButton className={classes.errorButton} onClick={() => onCancel && onCancel()}>
                                <CloseIcon />
                            </IconButton>
                        </>
                    )
                }
            </td>
        )
    }
}

export default withStyles(({ palette, typography }: Theme) => ({
    td: {
        textAlign: 'right',
    },
    successButton: {
        color: palette.success.main
    },
    errorButton: {
        color: palette.error.main
    },
}))(TableRowActions)