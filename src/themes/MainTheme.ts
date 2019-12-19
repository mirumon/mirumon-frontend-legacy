import { createMuiTheme, Theme } from '@material-ui/core'

const MainTheme: Theme = createMuiTheme({
    palette: {
        primary: {
            main: '#718AAC',
            dark: '#50637D'
        },
        secondary: {
            main: '#7D98BD',
            dark: 'rgba(0, 0, 0, 0.1)'
        },
        error: {
            main: '#BB6B75'
        },
        text: {
            primary: 'white',
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
