export interface ITableConfiguration {
    columns: Array<IColumnConfiguration>
}

export interface IColumnConfiguration {
    key: string,
    label: string,
    type: ColumnTypes,
    editable?: boolean,
}

export type ColumnTypes = 'text' | 'number' | 'check-list' | 'select'