import React, { Component } from 'react'
import { connect } from 'react-redux'
import { AsyncPageComponent } from 'utils/AsyncPageComponent'

type AppProps = {
  page: string
}

class App extends Component<AppProps> {
  render() {
    return (
      <AsyncPageComponent page={this.props.page} />
    )
  }
}

const mapStateToProps = ({ page }: any) => ({ page })

export default connect(mapStateToProps)(App)
