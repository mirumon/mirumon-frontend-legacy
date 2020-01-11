import React, { Component } from 'react'
import { ITableConfiguration } from './ITableConfiguration'
import { IColumnProps } from './ITableData'
import { IEditable } from './CellTypes/IEditable'
import TableCell from './TableCell'
import TableRowActions from './TableRowActions'
import { EditContainer } from 'utils/EditContainer';

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

    onApplyHandler = (data: Record<string, IColumnProps>) => {
        this.setState({
            data,
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
        const { isEditing } = this.state
        return (
            <tr>
                <EditContainer<Record<string, IColumnProps>>
                    value={this.state.data}
                    >
                    {
                        (value, setValue, reset) => (
                            <>
                                {
                                    Object.keys(value).map(key => (
                                        <TableCell
                                            key={`Row:${key}`}
                                            configuration={configuration.columns.find(o => o.key === key)}
                                            data={value[key]}
                                            isEditing={isEditing}
                                            onChange={(newValue) => setValue({
                                                ...value,
                                                [key]: {
                                                    ...value[key],
                                                    value: newValue,
                                                }
                                            })}
                                        />
                                    ))
                                }
                                {
                                    configuration.rows && configuration.rows.actions && (
                                        <TableRowActions 
                                            actions={configuration.rows.actions}
                                            isEditing={isEditing}
                                            onApply={() => this.onApplyHandler(value)}
                                            onEdit={this.onEditHandler}
                                            onCancel={() => {reset(); this.onCancelHandler()}}
                                        />
                                    )
                                }
                            </>
                        )
                    }
                </EditContainer>
            </tr>
        )
    }
}

export default TableRow