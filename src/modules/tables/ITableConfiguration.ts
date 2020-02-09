import { TableRowProps, TableRowState } from './rows/AbstractTableRow';
import { TID, IIdentifiableValue, TableType } from './ITableData';

export interface ITableConfiguration {
    rows?: IRowConfiguration
    columns: Array<IColumnConfiguration>
    /**
     * Some unneccessary data, look at ITableMetadata interface
     */
    metadata?: ITableMetadata
}

export interface ITableMetadata {
    /**
     * Tells that these columns will never be showed by default components,
     * requires user-specific rows.component that can use content from metadata scope
     */
    columns: Array<IColumnConfiguration>
}

export interface IRowConfiguration {
    actions?: Array<TRowActionTypes>
    component?: React.ComponentClass<TableRowProps, TableRowState>

    /**
     * Will be called for validating result of change
     * Must return null if result is valid
     * Must return message with error description or an array of such messages
     */
    validator?(result: Record<string, TableType>): ValidatorError
}

export type ValidatorError = null | IValidatorResult | Array<IValidatorResult>

export interface IValidatorResult {
    message: string
}

export interface IOptions {
    default?: TID,
    variants?: Array<IIdentifiableValue>
    placeholder?: string
}

export interface IColumnConfiguration {
    key: string,
    label: string,
    type: TColumnTypes,
    editable?: boolean,
    options?: IOptions
}

export interface ISelectColumnConfigurationProps {
    variants?: Array<IIdentifiableValue>,
}

export interface ICheckListColumnConfigurationProps {
    variants?: Array<IIdentifiableValue>,
}

export type TColumnTypes = 'text' | 'number' | 'check-list' | 'select' | 'password'
export type TRowActionTypes = 'create' | 'update' | 'delete'