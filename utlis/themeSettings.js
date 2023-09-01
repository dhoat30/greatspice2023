import { createTheme } from '@mui/material/styles';
//export theme settings
// mui theme settings 
export const theme = createTheme({
    palette: {
        primary: {
            main: '#F1CD4F',
            contrastText: '#3C2F00',
        },
        secondary: {
            main: '#9C906E',
        },
        contrastThreshold: 4.5,
    },
    typography: {
        fontFamily: [
            'var(--font-work-sans)',
            '"Segoe UI"',
            'Arial',
            'sans-serif',
        ].join(','),
        h1: {
            fontSize: '5rem',
            fontFamily: 'var(--font-neuton)',
            fontWeight: 400,
            '@media (max-width:600px)': {
                fontSize: '1.5rem',
            },
        }
    },
});