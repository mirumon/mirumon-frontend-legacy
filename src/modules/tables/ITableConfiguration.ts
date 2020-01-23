import { TID, IIdentifiableValue } from './ITableData';

export interface ITableConfiguration {
    rows?: IRowConfiguration
    columns: Array<IColumnConfiguration>
}

export interface IRowConfiguration {
    actions?: Array<TRowActionTypes>
}

export interface IOptions {
    default?: TID,
    variants?: Array<IIdentifiableValue>
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

export type TColumnTypes = 'text' | 'number' | 'check-list' | 'select'
export type TRowActionTypes = 'create' | 'update' | 'delete'