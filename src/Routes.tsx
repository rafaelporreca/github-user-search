import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from 'core/components/Navbar';
import Home from 'pages/Home';
import Search from 'pages/Search';
import SearchDetails from 'pages/Search/components/SearchDetails';

const Routes = () => (
    <BrowserRouter>
        <Navbar />
        <Switch>
            <Route path="/" exact>
                <Home/>
            </Route>
            <Route path="/search" exact>
                <Search />
            </Route>
            <Route path="/search/:searchName">
                <SearchDetails />
            </Route>
        </Switch>
    </BrowserRouter>
);

export default Routes;