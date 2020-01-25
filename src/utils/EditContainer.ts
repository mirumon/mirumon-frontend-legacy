import { Component } from 'react'

interface EditContainerProps<T> {
    value: T
    children(props: T, setValue: (value: T) => any, reset: () => any): JSX.Element
}

interface EditContainerState<T> {
    tmpValue: T
}

export class EditContainer<T> extends Component<EditContainerProps<T>, EditContainerState<T>> {

    constructor(props: EditContainerProps<T>){
        super(props)
        this.state = {
            tmpValue: props.value
        }
    }

    setValue = (value: T) => this.setState({
        tmpValue: value
    })
    
    reset = () => this.setState({
        tmpValue: this.props.value
    })

    render() {
        return this.props.children(this.state.tmpValue, this.setValue, this.reset)
    }
}