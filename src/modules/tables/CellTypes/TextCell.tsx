import React, { ChangeEvent } from 'react'
import { IEditable } from './IEditable'
import { Component } from 'react'
import { Theme, withStyles, Input } from '@material-ui/core'

interface TextCellProps extends IEditable<string> {
    value?: string
    classes: any
}

interface TextCellState {
    value: string
}

class TextCell extends Component<TextCellProps> {

    onChangeHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        this.setState({
            value: e.currentTarget.value
        })
        this.props.onChange && this.props.onChange(e.currentTarget.value)
    }

    render() {
        const { value, isEditing, classes } = this.props
        return (
            <td className={classes.td}>
                {!isEditing ? value : (
                    <Input
                        classes={{
                            root: classes.input,
                            underline: classes.underline
                        }}
                        value={value || ''}
                        onChange={this.onChangeHandler}
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