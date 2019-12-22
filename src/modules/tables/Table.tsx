import React, { Component } from 'react'
import { Theme, withStyles } from '@material-ui/core'
import { ITableConfiguration } from './ITableConfiguration'

interface TableProps {
    configuration: ITableConfiguration
    classes: any
}

class Table extends Component<TableProps> {
    render() {
        const { configuration, classes } = this.props
        return (
            <table className={classes.table}>
                <tr className={classes.trHead}>
                    {
                        configuration.columns.map(column => {
                            const { key, label = key, type = 'text' } = column
                            return (
                                <th className={classes.th} key={`${key}:${type}:${label}`}>
                                    <h3 style={{ margin: 0 }}>{label}</h3>
                                </th>
                            )
                        })
                    }
                </tr>
                <tr></tr>
            </table>
        )
    }
}

export default withStyles(({ palette, typography }: Theme) => ({
    table: {
        width: '100%',
        borderCollapse: 'collapse',
        fontFamily: typography.fontFamily,
    },
    trHead: {
        
    },
    th: {
        boxSizing: 'border-box',
        textAlign: 'left',
        borderBottom: `2px solid ${palette.primary.light}`,
        padding: '15px 20px',
        color: palette.text.disabled
    },
    td: {
        width: 'auto',
    }
}))(Table)