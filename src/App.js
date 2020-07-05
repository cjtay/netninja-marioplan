import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails';
import SignIn from './components/auth/SignIn';

import './App.css';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Dashboard} />
                    <Route exact path="/signin" component={SignIn} />
                    <Route
                        exact
                        path="/project/:id"
                        component={ProjectDetails}
                    />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
