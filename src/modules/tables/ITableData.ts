export type TableType = string | number | Array<TID>

export type ITableRecord = IIdentifiable & Record<string, TableType>

export interface ITableData extends Array<ITableRecord> {}

export type TID = string | number

export interface IIdentifiable {
    id: TID
}

export interface IIdentifiableValue extends IIdentifiable {
    label: string
}
