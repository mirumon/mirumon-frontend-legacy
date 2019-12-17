import React from 'react';
import { Component, ReactNode } from "react";

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
            console.log(page)
            that.setState({
                component: page.default
            })
        })
    }

    render() {
        const Page: React.ComponentClass | null = this.state.component
        return Page ? <Page /> : null
    }
}