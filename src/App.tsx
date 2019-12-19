import React, { Component } from 'react'
import { connect } from 'react-redux'
import { AsyncPageComponent } from 'utils/AsyncPageComponent'
import { withStyles, Theme, Box } from '@material-ui/core'
import { Styles } from '@material-ui/core/styles/withStyles'

type AppProps = {
  page: string,
  classes: any
}

class App extends Component<AppProps> {
  render() {
    return (
      <Box className={this.props.classes.root}>
        <AsyncPageComponent page={this.props.page} />
      </Box>
    )
  }
}

const mapStateToProps = ({ page }: any) => ({ page })

export default connect(mapStateToProps)(withStyles(({ palette }: Theme) => ({
  root: {
    background: palette.primary.main,
    minHeight: '100vh',
    width: '100vw',
    color: palette.text.primary,
  }
}))(App))
