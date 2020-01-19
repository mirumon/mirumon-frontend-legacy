import React, { Component } from 'react'
import { IColumnConfiguration } from './ITableConfiguration'
import { IColumnProps, ITextColumnProps, ISelectColumnDataProps, ICheckListColumnProps } from './ITableData'
import TextCell from './CellTypes/TextCell'
import SelectCell from './CellTypes/SelectCell'
import { IEditable } from './CellTypes/IEditable'
import CheckListCell from './CellTypes/CheckListCell'

interface TableCellProps extends IEditable<IColumnProps>{
    configuration?: IColumnConfiguration
    data?: IColumnProps
    onChange?(value: any): any
}

class TableCell extends Component<TableCellProps> {

    render() {
        
        const { configuration, isEditing } = this.props
        switch(configuration && configuration.type) {
            case 'text':
                return (
                    <TextCell
                        value={(this.props.data as ITextColumnProps)?.value}
                        onChange={this.props.onChange}
                        isEditing={isEditing}
                    />
                )
            case 'number':
                return (<td>{this.props.data?.value}</td>)
            case 'select':
                const selectColumnDataProps = this.props.data as ISelectColumnDataProps
                return (
                    <SelectCell
                        value={selectColumnDataProps?.value}
                        variants={this.props.configuration?.options?.variants}
                        onChange={this.props.onChange} isEditing={isEditing}
                    />
                )
            case 'check-list':
                return (
                    <CheckListCell
                        value={(this.props.data as ICheckListColumnProps)?.value}
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