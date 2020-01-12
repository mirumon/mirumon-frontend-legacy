import React from 'react'
import { ICheckListColumnProps, TID } from '../ITableData'
import { IEditable } from './IEditable'
import { Component } from 'react'
import { Theme, withStyles, Select, MenuItem } from '@material-ui/core'
import { ICheckListColumnConfigurationProps } from '../ITableConfiguration'

interface CheckListCellProps extends ICheckListColumnConfigurationProps, ICheckListColumnProps, IEditable<Array<TID>> {
    classes: any
}

class CheckListCell extends Component<CheckListCellProps> {
    render() {
        const { value, variants, isEditing, onChange, classes } = this.props
        const variantsMap = new Map()
        variants?.forEach(v => variantsMap.set(v.id, v.label))
        return (
            <td className={classes.td}>
                {!isEditing ? (
                    value.map(v => variantsMap.get(v)).join(', ')
                ) : (
                    <Select
                        classes={{
                            root: classes.input,
                        }}
                        value={value}
                        onChange={(e) => {
                            onChange && onChange(e.target.value as Array<TID>)
                        }}
                        MenuProps={{ classes: { paper: classes.paper } }}
                        inputProps={{ classes: { underline: classes.underline }}}
                        multiple
                        displayEmpty
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