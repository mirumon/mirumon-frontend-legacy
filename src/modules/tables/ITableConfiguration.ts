export interface ITableConfiguration {
    columns: Array<IColumnsConfiguration>
}

export interface IColumnsConfiguration {
    key: string,
    label: string,
    type?: ColumnTypes,
    editable?: boolean,
}

export type ColumnTypes = 'text' | 'number' | 'check-list' | 'select'