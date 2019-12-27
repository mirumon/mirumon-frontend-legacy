import React, { Component } from 'react'
import { IColumnConfiguration } from './ITableConfiguration'
import { IColumnProps, ITextColumnProps, ISelectColumnProps, ICheckListColumnProps } from './ITableData'
import TextCell from './CellTypes/TextCell'
import SelectCell from './CellTypes/SelectCell'
import { IEditable } from './CellTypes/IEditable'
import CheckListCell from './CellTypes/CheckListCell'

interface TableCellProps extends IEditable<IColumnProps>{
    configuration?: IColumnConfiguration
    data: IColumnProps
}

interface TableCellState {
    data: IColumnProps
}

class TableCell extends Component<TableCellProps, TableCellState> {

    constructor(props: TableCellProps){
        super(props)
        this.state = {
            data: props.data
        }
    }

    onChangeHandler = (value: any) => {
        this.setState({
            data: {
                value
            }
        })
    }

    render() {
        
        const { configuration, isEditing } = this.props
        switch(configuration && configuration.type) {
            case 'text':
                return (<TextCell value={(this.state.data as ITextColumnProps).value} onChange={this.onChangeHandler} isEditing={isEditing} />)
            case 'number':
                return (<td>{this.state.data.value}</td>)
            case 'select':
                const stateData = this.state.data as ISelectColumnProps
                return (<SelectCell value={stateData.value} variants={(this.props.data as ISelectColumnProps).variants} onChange={this.onChangeHandler} isEditing={isEditing}/>)
            case 'check-list':
                return (<CheckListCell value={(this.state.data as ICheckListColumnProps).value} onChange={this.onChangeHandler} isEditing={isEditing} />)
            default:
                return (null)
        }
    }
}

export default TableCell