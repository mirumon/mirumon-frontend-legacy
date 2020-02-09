import { TableRowProps, TableRowState } from './rows/AbstractTableRow';
import { TID, IIdentifiableValue } from './ITableData';

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