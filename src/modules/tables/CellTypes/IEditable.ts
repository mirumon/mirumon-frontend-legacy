export interface IEditable<T> {
    isEditing?: boolean
    onChange?(value: T): void
}