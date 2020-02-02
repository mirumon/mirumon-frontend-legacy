import React, { Component } from 'react'
import TableCell from 'modules/tables/TableCell'
import TableRowActions from 'modules/tables/rows/TableRowActions'
import { EditContainer } from 'utils/EditContainer'
import { ITableRecord } from 'modules/tables/ITableData'
import AbstractTableRow from 'modules/tables/rows/AbstractTableRow'

class UserTableRow extends AbstractTableRow {
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
                                    Object.keys(value).filter(key => (key !== 'password' && key !== 'confirm_password') && key).map(key => (
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

export default UserTableRow