import React, { Component } from 'react'
import { Theme, withStyles, Box, Input, InputProps, IconButton } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'

interface SearchInputProps extends InputProps {
    onEnter?(): void
    classes: any
}

class SearchInput extends Component<SearchInputProps> {
    render() {
        const {
            classes,
            onEnter,
            value,
            className,
            ...other
        } = this.props
        return (
            <Box className={className}>
                <Box className={classes.interior}>
                    <Input className={classes.input} {...other} disableUnderline/>
                    <IconButton className={classes.button} size="small" onClick={() => onEnter && onEnter()}>
                        <SearchIcon />
                    </IconButton>
                </Box>
            </Box>
        )
    }
}

export default withStyles(({ palette }: Theme) => ({
    interior: {
        border: `1px solid ${palette.secondary.light}`,
        borderRadius: 40,
        background: palette.secondary.main,
        padding: '0 10px 0 18px',
        boxSizing: 'border-box',
        width: '100%',
        display: 'flex'
    },
    input: {
        color: palette.text.secondary,
        flex: '1'
    },
    button: {
        flex: '0'
    }
}))(SearchInput)
