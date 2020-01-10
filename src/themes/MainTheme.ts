import { createMuiTheme, Theme } from '@material-ui/core'

const MainTheme: Theme = createMuiTheme({
    palette: {
        primary: {
            main: '#718AAC',
            dark: '#50637D',
            light: 'rgba(0, 0, 0, 0.1)'
        },
        secondary: {
            main: '#7D98BD',
            dark: 'rgba(0, 0, 0, 0.1)',
            light: 'rgba(255, 255, 255, 0.25)',
        },
        error: {
            main: '#BB6B75'
        },
        success: {
            main: '#3FB2AA'
        },
        text: {
            primary: '#fff',
            secondary: '#425269',
            disabled: 'rgba(255, 255, 255, 0.45)',
            hint: '#50637D'
        },
    },
    typography: {
        fontFamily: [
            '"Nunito"',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"'
        ].join(',')
    }
})

export default MainTheme
