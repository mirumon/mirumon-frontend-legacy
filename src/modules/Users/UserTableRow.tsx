import React, { Component } from 'react'
import TableCell from 'modules/tables/TableCell'
import TableRowActions from 'modules/tables/rows/TableRowActions'
import { EditContainer } from 'utils/EditContainer'
import { ITableRecord } from 'modules/tables/ITableData'
import AbstractTableRow, { TableRowState, TableRowProps } from 'modules/tables/rows/AbstractTableRow'
import { IconButton } from '@material-ui/core'
import VpnKeyIcon from '@material-ui/icons/VpnKey'

interface UserTableRowState extends TableRowState {
    editingTarget: 'USER' | 'PASSWORD'
}

class UserTableRow extends AbstractTableRow<TableRowProps, UserTableRowState> {

    constructor(props: TableRowProps){
        super(props)
        this.state = {
            ...this.state,
            editingTarget: 'USER'
        } as UserTableRowState
    }

    onKeyIconClickHandler() {
        this.setState({
            editingTarget: 'PASSWORD',
            isEditing: true
        })
    }

    onCancelHandler() {
        super.onCancelHandler()
        this.setState({
            editingTarget: 'USER',
        })
    }

    onApplyHandler(data: ITableRecord) {
        super.onApplyHandler(data)
        this.setState({
            editingTarget: 'USER'
        })
    }
    
    render() {
        const { data, configuration } = this.props
        const { isEditing, editingTarget } = this.state as UserTableRowState
        return (
            <tr>
                <EditContainer<ITableRecord>
                    value={data}
                    >
                    {
                        (value, setValue, reset) => (
                            <>
                                {
                                    editingTarget === 'USER' && (
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
                                    )
                                }
                                {
                                    editingTarget === 'PASSWORD' && (
                                        <>
                                            <TableCell
                                                key={`${value.id}:name`}
                                                configuration={configuration.columns.find(o => o.key === 'name')}
                                                data={value['name']}
                                                isEditing={false}
                                            />
                                            {
                                                Object.keys(value).filter(key => (key === 'password' || key === 'confirm_password') && key).map(key => (
                                                    <TableCell
                                                        key={`${value.id}:${key}`}
                                                        configuration={configuration.metadata?.columns.find(o => o.key === key)}
                                                        data={value[key]}
                                                        isEditing={isEditing}
                                                        onChange={(newValue) => setValue({
                                                            ...value,
                                                            [key]: newValue
                                                        })}
                                                    />
                                                ))
                                            }
                                        </>
                                    )
                                }
                                {
                                    configuration.rows && configuration.rows.actions && (
                                        <TableRowActions
                                            actions={configuration.rows.actions}
                                            isEditing={isEditing}
                                            onApply={() => this.onApplyHandler(value)}
                                            onEdit={() => this.onEditHandler()}
                                            onCancel={() => {reset(); this.onCancelHandler()}}
                                            onDelete={() => this.onDeleteHandler()}
                                        >
                                            <IconButton onClick={() => this.onKeyIconClickHandler()}>
                                                <VpnKeyIcon />
                                            </IconButton>
                                        </TableRowActions>
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