import React, { Component } from 'react'
import { ITableConfiguration } from './ITableConfiguration'
import { IColumnProps } from './ITableData'
import { IEditable } from './CellTypes/IEditable'
import TableCell from './TableCell'
import TableRowActions from './TableRowActions'

interface TableRowProps {
    configuration: ITableConfiguration
    data: Record<string, IColumnProps>
    onChange?(value: Record<string, IColumnProps>): void
}

interface TableRowState {
    data: Record<string, IColumnProps>
    isEditing: boolean
}

class TableRow extends Component<TableRowProps, TableRowState> {

    constructor(props: TableRowProps){
        super(props)
        this.state = {
            data: props.data,
            isEditing: false
        }
    }

    onCancelHandler = () => {
        this.setState({
            isEditing: false
        })
    }

    onApplyHandler = () => {
        this.setState({
            isEditing: false
        })
    }

    onEditHandler = () => {
        this.setState({
            isEditing: true
        })
    }

    render() {
        const { configuration } = this.props
        const { data, isEditing } = this.state
        return (
            <tr>
                {
                    Object.keys(data).map(key => (
                        <TableCell configuration={configuration.columns.find(o => o.key === key)} data={data[key]} isEditing={isEditing}/>
                    ))
                }
                {
                    configuration.rows && configuration.rows.actions && (
                        <TableRowActions 
                            actions={configuration.rows.actions}
                            isEditing={isEditing}
                            onApply={this.onApplyHandler}
                            onEdit={this.onEditHandler}
                            onCancel={this.onCancelHandler}
                        />
                    )
                }
            </tr>
        )
    }
}

export default TableRow