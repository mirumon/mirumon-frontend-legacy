import React from 'react'
import { ITextColumnProps } from '../ITableData'
import { IEditable } from './IEditable'
import { Component } from 'react'
import { Input, Theme, withStyles } from '@material-ui/core'

interface TextCellProps extends ITextColumnProps, IEditable<string> {
    classes: any
}

interface TextCellState {
    value: string
}

class TextCell extends Component<TextCellProps> {

    render() {
        const { value, isEditing, onChange, classes } = this.props
        console.log(value)
        return (
            <td className={classes.td}>
                {!isEditing ? value : (
                    <Input
                        classes={{
                            root: classes.input,
                            underline: classes.underline
                        }}
                        value={value}
                        onChange={e => onChange && onChange(e.target.value)}
                    />
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
        width: '100%'
    },
    underline: {
        '&:after': {
            borderBottom: `2px solid ${palette.primary.dark}`
        }
    }
}))(TextCell)