import React, { Component } from 'react'
import { Theme, withStyles } from '@material-ui/core'
import { IColumnConfiguration } from './ITableConfiguration'
import { IColumnProps, ITextColumnProps } from './ITableData'
import TextCell from './CellTypes/TextCell'

interface TableCellProps {
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

    onChangeHandler = (value: string) => {
        this.setState({
            data: {
                value
            }
        })
    }

    render() {
        const { configuration, data } = this.props
        switch(configuration && configuration.type) {
            case 'text':
                return (<TextCell value={(this.state.data as ITextColumnProps).value} onChange={this.onChangeHandler} isEditing={true}/>)
            case 'number':
                return (<td>{data.value}</td>)
            default:
                return (null)
        }
    }
}

export default TableCell