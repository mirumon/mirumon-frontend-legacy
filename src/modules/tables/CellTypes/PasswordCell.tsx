import React, { ChangeEvent } from 'react'
import { IEditable } from './IEditable'
import { Component } from 'react'
import { Theme, withStyles, Input, InputAdornment, IconButton } from '@material-ui/core'
import VisibilityIcon from '@material-ui/icons/Visibility'
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff'

interface PasswordCellProps extends IEditable<string> {
    value?: string
    classes: any
}

interface PasswordCellState {
    visibility: boolean,
}

class PasswordCell extends Component<PasswordCellProps, PasswordCellState> {

    constructor(props: PasswordCellProps){
        super(props)
        this.state = {
            visibility: false
        }
    }

    onChangeHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        this.props.onChange && this.props.onChange(e.currentTarget.value)
    }

    toggleVisibility = () => {
        this.setState({
            visibility: !this.state.visibility
        })
    }

    render() {
        const { value, isEditing, classes } = this.props
        const { visibility } = this.state
        return (
            <td className={classes.td}>
                {!isEditing ? value : (
                    <Input
                        classes={{
                            root: classes.input,
                            underline: classes.underline
                        }}
                        type={visibility ? 'text' : 'password'}
                        value={value || ''}
                        onChange={this.onChangeHandler}
                        endAdornment={
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={() => this.toggleVisibility()}
                              >
                                {visibility ? <VisibilityIcon /> : <VisibilityOffIcon />}
                              </IconButton>
                            </InputAdornment>
                          }
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
}))(PasswordCell)