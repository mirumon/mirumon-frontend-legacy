import React, { Component } from 'react'
import { Theme, withStyles } from '@material-ui/core'
import { ITableConfiguration } from './ITableConfiguration'
import { ITableData, ITableRecord } from './ITableData'
import TableRow from './TableRow'
import CreatingRow from './CreatingRow'

interface ITableHandlers {
    onCreate?(value: Partial<ITableRecord>): any
    onUpdate?(): any
    onDelete?(): any
    onCreateCancel?(): any
}

interface TableProps {
    isCreating?: boolean
    data?: ITableData
    configuration: ITableConfiguration
    handlers?: ITableHandlers
    classes: any
}

class Table extends Component<TableProps> {
    render() {
        const { 
            isCreating,
            configuration,
            data = null,
            classes,
            handlers
        } = this.props
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
                        isCreating && <CreatingRow
                            configuration={configuration}
                            onApply={handlers?.onCreate}
                            onClose={handlers?.onCreateCancel}
                        />
                    }
                    {
                        data && data.map(record => (<TableRow key={"id" + record.id} configuration={configuration} data={record}/>))
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