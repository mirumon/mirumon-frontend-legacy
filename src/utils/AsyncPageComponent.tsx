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

    private importPage() {
        const that:AsyncPageComponent = this
        import(`pages/${this.props.page}`).then(page => {
            that.setState({
                component: page.default
            })
        })
    }

    componentDidMount() {
        this.importPage()
    }

    componentDidUpdate(prevProps: AsyncPageComponentProps) {
        if(prevProps.page !== this.props.page) this.importPage()
    }

    render() {
        const { page, ...other} = this.props
        const Page: React.ComponentClass | null = this.state.component
        return Page ? <Page {...other}/> : null
    }
}