export type IColumnProps = ITextColumnProps | INumberColumnProps | ICheckListColumnProps | ISelectColumnProps

export interface ITableData extends Array<Record<string, IColumnProps>> {}

export type TID = string | number

export interface ITextColumnProps {
    value: string,
}

export interface INumberColumnProps {
    value: number,
}

export interface ICheckListColumnProps {
    value: Array<TCheckListValue>
}

export type TCheckListValue = {
    isSelected?: boolean,
    id: TID,
    label: string
}

export interface ISelectColumnProps {
    value: TID,
    variants: Array<TSelectValue>
}

export type TSelectValue = {
    id: TID,
    label: string
}

