import React, { Component } from 'react'
import { Box, Chip, Theme, withStyles } from '@material-ui/core'
import CheckIcon from '@material-ui/icons/Check'

interface ISelectorVariant {
    value: string,
    label: string,
}

interface ISelectorProps {
    value?: string | null
    variants: Array<ISelectorVariant>
    onChange?(value: string): void
}

interface FilterPermissionsSelectorProps extends ISelectorProps {
    className?: string
    classes: any
}

class FilterPermissionsSelector extends Component<FilterPermissionsSelectorProps> {
    render() {
        const {
            className,
            classes,
            variants,
            value: selected,
            onChange
        } = this.props
        return (
            <Box className={classes.root + " " + className || ""}>
                {
                    variants.map(({ value, label }) => (
                        <Chip
                            color="secondary"
                            className={classes.chip}
                            label={ label }
                            icon={ selected === value ? <CheckIcon /> : undefined }
                            onClick={() => onChange && onChange(value)}
                        />
                    ))
                }
            </Box>
        )
    }
}

export default withStyles(({ palette }: Theme) => ({
    chip: {
        marginRight: '10px',
        color: palette.text.secondary,
        border: `1px solid ${palette.secondary.light}`
    }
}))(FilterPermissionsSelector)