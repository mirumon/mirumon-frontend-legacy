import React, { Component } from 'react'
import { IColumnConfiguration } from './ITableConfiguration'
import TextCell from './CellTypes/TextCell'
import SelectCell from './CellTypes/SelectCell'
import { IEditable } from './CellTypes/IEditable'
import CheckListCell from './CellTypes/CheckListCell'
import { TableType, TID } from './ITableData'

interface TableCellProps extends IEditable<TableType>{
    configuration?: IColumnConfiguration
    data?: TableType
    onChange?(value: any): any
}

class TableCell extends Component<TableCellProps> {

    render() {
        
        const { configuration, isEditing } = this.props
        switch(configuration && configuration.type) {
            case 'text':
                return (
                    <TextCell
                        value={this.props.data as string}
                        onChange={this.props.onChange}
                        isEditing={isEditing}
                    />
                )
            case 'number':
                return (<td>{this.props.data}</td>)
            case 'select':
                const selectColumnDataProps = this.props.data as TID
                return (
                    <SelectCell
                        value={selectColumnDataProps}
                        variants={this.props.configuration?.options?.variants}
                        onChange={this.props.onChange} isEditing={isEditing}
                    />
                )
            case 'check-list':
                return (
                    <CheckListCell
                        value={(this.props.data as Array<TID>)}
                        variants={this.props.configuration?.options?.variants}
                        onChange={this.props.onChange}
                        isEditing={isEditing}
                    />
                )
            default:
                return (null)
        }
    }
}

export default TableCell