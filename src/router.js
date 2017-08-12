import React, { PureComponent } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import App from './components/App';
import Calendar from './components/calendar/calendar';

class Router extends PureComponent {

    render() {
        return (
            <BrowserRouter>
                <div>
                    <App />
                    <Switch>
                        <Route exact path='/' component={ Calendar }/>
                        <Redirect from='*' to='/'/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
};

export default Router;
