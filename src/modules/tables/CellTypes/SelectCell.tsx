import React from 'react'
import { ISelectColumnDataProps, TID } from '../ITableData'
import { IEditable } from './IEditable'
import { Component } from 'react'
import { Theme, withStyles, Select, MenuItem } from '@material-ui/core'
import { ISelectColumnConfigurationProps } from '../ITableConfiguration'

interface SelectCellProps extends ISelectColumnConfigurationProps, ISelectColumnDataProps, IEditable<TID> {
    classes: any
}

class SelectCell extends Component<SelectCellProps> {
    render() {
        const { value, variants, isEditing, onChange, classes } = this.props
        return (
            <td className={classes.td}>
                {!isEditing ? (
                    variants?.find(variant => variant.id === value)?.label
                ) : (
                    <Select
                        autoWidth
                        classes={{ root: classes.input }}
                        value={value}
                        onChange={(e) => onChange && onChange(e.target.value as string)}
                        MenuProps={{ classes: { paper: classes.paper } }}
                >
                    {
                        variants?.map(({id, label}) => (
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
        minWidth: '150px'
    },
    paper: {
        background: palette.primary.main,
    }
}))(SelectCell)