import { IValidatorResult, ValidatorError } from './../ITableConfiguration';
import { TableType } from './../ITableData';
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
    validatorErrorMessages: ValidatorError,
    isEditing: boolean
}

abstract class AbstractTableRow<T extends TableRowProps = TableRowProps, S extends TableRowState = TableRowState> extends Component<T, S> {

    constructor(props: T){
        super(props)
        this.state = { isEditing: false } as S
    }

    protected onApplyHandler(data: ITableRecord) {
        this.props.onChange && this.props.onChange(data)
        this.setState({
            isEditing: false
        })
    }

    protected onEditHandler() {
        this.setState({
            isEditing: true
        })
    }

    protected onCancelHandler() {
        this.setState({
            isEditing: false
        })
    }

    protected onDeleteHandler() {
        this.props.onDelete && this.props.onDelete()
    }

    protected onChangeHandler(record: Record<string, TableType>) {
        console.log(this.props.configuration.rows?.validator && this.props.configuration.rows.validator(record))
    }

    // TODO: Will avoid code duplication in inherited classes where Table cell instantiating
    protected makeTableCell() {}

}

export default AbstractTableRow