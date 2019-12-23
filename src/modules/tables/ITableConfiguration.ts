export interface ITableConfiguration {
    rows?: IRowConfiguration
    columns: Array<IColumnConfiguration>
}

export interface IRowConfiguration {
    actions?: Array<TRowActionTypes>
}

export interface IColumnConfiguration {
    key: string,
    label: string,
    type: TColumnTypes,
    editable?: boolean,
}

export type TColumnTypes = 'text' | 'number' | 'check-list' | 'select'
export type TRowActionTypes = 'create' | 'update' | 'delete'