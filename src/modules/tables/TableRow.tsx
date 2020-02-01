import React, { Component } from 'react'
import { ITableConfiguration } from './ITableConfiguration'
import TableCell from './TableCell'
import TableRowActions from './TableRowActions'
import { EditContainer } from 'utils/EditContainer';
import { ITableRecord } from './ITableData'

interface TableRowProps {
    configuration: ITableConfiguration
    data: ITableRecord
    onChange?(value: ITableRecord): void
    onDelete?(): any
}

interface TableRowState {
    data: ITableRecord
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

    onApplyHandler = (data: ITableRecord) => {
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

    onCancelHandler = () => {
        this.setState({
            isEditing: false
        })
    }

    onDeleteHandler = () => {
        console.log('Something deleted')
        this.props.onDelete && this.props.onDelete()
    }

    render() {
        const { configuration } = this.props
        const { isEditing } = this.state
        return (
            <tr>
                <EditContainer<ITableRecord>
                    value={this.state.data}
                    >
                    {
                        (value, setValue, reset) => (
                            <>
                                {
                                    Object.keys(value).map(key => {
                                        return (
                                        <TableCell
                                            key={`${value.id}:${key}`}
                                            configuration={configuration.columns.find(o => o.key === key)}
                                            data={value[key]}
                                            isEditing={isEditing}
                                            onChange={(newValue) => setValue({
                                                ...value,
                                                [key]: newValue
                                            })}
                                        />
                                    )})
                                }
                                {
                                    configuration.rows && configuration.rows.actions && (
                                        <TableRowActions 
                                            actions={configuration.rows.actions}
                                            isEditing={isEditing}
                                            onApply={() => this.onApplyHandler(value)}
                                            onEdit={this.onEditHandler}
                                            onCancel={() => {reset(); this.onCancelHandler()}}
                                            onDelete={this.onDeleteHandler}
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