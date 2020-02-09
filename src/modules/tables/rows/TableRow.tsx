import React, { Component } from 'react'
import { ITableConfiguration } from '../ITableConfiguration'
import TableCell from '../TableCell'
import TableRowActions from './TableRowActions'
import { EditContainer } from 'utils/EditContainer'
import { ITableRecord } from '../ITableData'
import AbstractTableRow from './AbstractTableRow'

class TableRow extends AbstractTableRow {
    render() {
        const { data, configuration } = this.props
        const { validatorErrorMessages, isEditing } = this.state
        return (
            <tr>
                <EditContainer<ITableRecord>
                    value={data}
                    >
                    {
                        (value, setValue, reset) => (
                            <>
                                {
                                    Object.keys(value).map(key => (
                                        <TableCell
                                            key={`${value.id}:${key}`}
                                            configuration={configuration.columns.find(o => o.key === key)}
                                            data={value[key]}
                                            isEditing={isEditing}
                                            onChange={(newValue) => {
                                                const record = {
                                                    ...value,
                                                    [key]: newValue
                                                }
                                                this.onChangeHandler(record)
                                                setValue(record)
                                            }}
                                        />
                                    ))
                                }
                                {
                                    configuration.rows && configuration.rows.actions && (
                                        <TableRowActions 
                                            actions={configuration.rows.actions}
                                            isEditing={isEditing}
                                            validatorErrorMessages={validatorErrorMessages}
                                            onApply={() => this.onApplyHandler(value)}
                                            onEdit={() => this.onEditHandler()}
                                            onCancel={() => {reset(); this.onCancelHandler()}}
                                            onDelete={() => this.onDeleteHandler()}
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