import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'react-jss';
import Theme from 'resources/theme';
import Routes from 'routes';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { GlobalStateProvider } from 'hooks/GlobalContext';
import store from './store'
import { Provider } from 'react-redux'
ReactDOM.render(
    <ThemeProvider theme={Theme}>
        <Provider store={store}>
        <GlobalStateProvider>
            <Router>
                <Routes />
            </Router>
        </GlobalStateProvider>
        </Provider>
    </ThemeProvider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
