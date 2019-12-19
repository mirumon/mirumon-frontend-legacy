import React from 'react';
import { Component } from "react";

type AsyncPageComponentProps = {
    page: string
}

type AsyncPageComponentState = {
    component: React.ComponentClass | null
}

export class AsyncPageComponent extends Component<AsyncPageComponentProps, AsyncPageComponentState> {
    constructor(props: AsyncPageComponentProps) {
        super(props)
        this.state = {
            component: null,
        }
    }

    componentDidMount() {
        const that:AsyncPageComponent = this
        import(`pages/${this.props.page}`).then(page => {
            that.setState({
                component: page.default
            })
        })
    }

    render() {
        const { page, ...other} = this.props
        const Page: React.ComponentClass | null = this.state.component
        return Page ? <Page {...other}/> : null
    }
}