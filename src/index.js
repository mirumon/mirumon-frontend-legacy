import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { Provider } from 'react-redux'
import configureStore from './router/configureStore'
import { ThemeProvider } from '@material-ui/core'
import MainTheme from 'themes/MainTheme'

const { store } = configureStore()

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={MainTheme}>
            <App />
        </ThemeProvider>
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
