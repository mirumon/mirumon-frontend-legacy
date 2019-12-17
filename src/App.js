import React from 'react'
import { connect } from 'react-redux'
import { AsyncPageComponent } from './utils/AsyncPageComponent'

const App = ({ page }) => (
  <AsyncPageComponent page={page} />
)

const mapStateToProps = ({ page }) => ({ page })

export default connect(mapStateToProps)(App)
