import React from 'react';
import Home from './components/Home/Home.js';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme.js';


const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <div>
                <Home/>
            </div>
        </ThemeProvider>
    )
}

export default App;