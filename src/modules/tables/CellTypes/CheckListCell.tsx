import React from 'react'
import { ICheckListColumnProps, TCheckListValue, TID } from '../ITableData'
import { IEditable } from './IEditable'
import { Component } from 'react'
import { Theme, withStyles, Select, MenuItem } from '@material-ui/core'

interface CheckListCellProps extends ICheckListColumnProps, IEditable<Array<TCheckListValue>> {
    classes: any
}

class CheckListCell extends Component<CheckListCellProps> {
    render() {
        const { value, isEditing, onChange, classes } = this.props
        return (
            <td className={classes.td}>
                {!isEditing ? (
                    value.filter(({ isSelected }) => isSelected)
                        .map(({ label }) => label)
                        .join(', ')
                ) : (
                    <Select
                        classes={{
                            root: classes.input,
                        }}
                        value={value.filter(({ isSelected }) => isSelected).map(({ id }) => id)}
                        onChange={(e) => {
                            const ids = new Set(e.target.value as Array<TID>)
                            const newValue: Array<TCheckListValue> = value.map(({ id, label }) => ({
                                id,
                                label,
                                isSelected: ids.has(id)
                            }))
                            onChange && onChange(newValue)
                        }}
                        MenuProps={{ classes: { paper: classes.paper } }}
                        inputProps={{ classes: { underline: classes.underline }}}
                        multiple
                        displayEmpty
                    >
                        {
                            value.map(({ id, label, isSelected }) => (
                                <MenuItem key={`${id}:${label}`} value={id}>{label}</MenuItem>
                            ))
                        }
                    </Select>
                )}
            </td>
        )
    }
}

export default withStyles(({ palette, typography }: Theme) => ({
    td: {
        padding: '10px 20px'
    },
    input: {
        minWidth: '300px'
    },
    paper: {
        background: palette.primary.main,
    },
    underline: {
        '&:after': {
            borderBottom: `2px solid ${palette.primary.dark}`
        }
    }
}))(CheckListCell)