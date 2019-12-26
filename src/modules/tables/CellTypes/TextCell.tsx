import React from 'react'
import { ITextColumnProps } from '../ITableData'
import { IEditableCell } from './IEditableCell'
import { Component } from 'react'
import { Input, Theme, withStyles } from '@material-ui/core'

interface TextCellProps extends ITextColumnProps, IEditableCell<string> {
    classes: any
}

class TextCell extends Component<TextCellProps> {
    render() {
        const { value, isEditing, onChange, classes } = this.props
        return (
            !isEditing ? (
                <td>{value}</td>
            ) : (
                <td>
                    <Input classes={classes} value={value} onChange={e => onChange(e.target.value)}/>
                </td>
            )
        )
    }
}

export default withStyles(({ palette, typography }: Theme) => ({
    underline: {
        '&:after': {
            borderBottom: `2px solid ${palette.primary.dark}`
        }
    }
}))(TextCell)