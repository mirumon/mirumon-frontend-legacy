export interface IEditableCell<T> {
    isEditing?: boolean
    onChange(value: T): void
}