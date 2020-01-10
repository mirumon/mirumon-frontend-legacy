import React, { Component } from 'react'
import { Theme, withStyles } from '@material-ui/core'
import { ITableConfiguration } from './ITableConfiguration'
import { ITableData } from './ITableData'
import TableRow from './TableRow'

interface TableProps {
    data?: ITableData
    configuration: ITableConfiguration
    classes: any
}

class Table extends Component<TableProps> {
    render() {
        const { configuration, data = null, classes } = this.props
        return (
            <table className={classes.table}>
                <thead>
                    <tr>
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
                        <th className={classes.th} key={`Table::actions`}></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data && data.map(record => (<TableRow configuration={configuration} data={record}/>))
                    }
                </tbody>
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
    th: {
        boxSizing: 'border-box',
        textAlign: 'left',
        borderBottom: `2px solid ${palette.primary.light}`,
        padding: '15px 20px',
        color: palette.text.disabled
    },
    td: {
        width: 'auto',
        padding: '15px 20px',
    }
}))(Table)