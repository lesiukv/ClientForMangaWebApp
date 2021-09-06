import React from 'react';
import Main from './components/Main.js';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme.js';


const App = () => {
    return (
        
        <ThemeProvider theme={theme}>
            <div>
                <Main/>
            </div>
        </ThemeProvider>
    )
}

export default App;