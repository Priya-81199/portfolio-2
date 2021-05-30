import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/Homepage';
import './App.css'
import ProjectPage from './pages/Projects';

const App = () => {
    return (
        <BrowserRouter>
                <Switch>
                    <Route
                        exact
                        path="/"
                        component={HomePage}
                    /> 
                    <Route
                        exact
                        path="/projects"
                        component={ProjectPage}
                    />   
                </Switch>
        </BrowserRouter>
    );
};

export default App;