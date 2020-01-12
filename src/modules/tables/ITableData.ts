export type IColumnProps = ITextColumnProps | INumberColumnProps | ICheckListColumnProps | ISelectColumnDataProps

export interface ITableData extends Array<Record<string, IColumnProps>> {}

export type TID = string | number

export interface ITextColumnProps {
    value: string,
}

export interface INumberColumnProps {
    value: number,
}

export interface ICheckListColumnProps {
    value: Array<TID>
}

export interface ISelectColumnDataProps {
    value: TID,
}

export interface IIdentifiableValue {
    id: TID,
    label: string
}
