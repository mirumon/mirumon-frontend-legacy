import { Component } from 'react'
import { ITableConfiguration } from '../ITableConfiguration'
import { ITableRecord } from '../ITableData'

export interface TableRowProps {
    configuration: ITableConfiguration
    data: ITableRecord
    onChange?(value: ITableRecord): void
    onDelete?(): any
}

export interface TableRowState {
    data: ITableRecord
    isEditing: boolean
}

abstract class AbstractTableRow extends Component<TableRowProps, TableRowState> {

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
        this.props.onDelete && this.props.onDelete()
    }

}

export default AbstractTableRow