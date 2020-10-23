import React, { useContext } from 'react';
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch
} from "react-router-dom";

import { AuthContext } from '../auth/AuthContext';
import Private from './Private'
import Public from './Public';
import NavBar from '../shared/UI/NavBar'
import MenuButton from '../shared/UI/Mobile/MenuButton'
import Register from '../pages/Register'
import LandingPage from '../pages/LandingPage';
import List from '../pages/List'
import EnglishEspañolButton from '../shared/UI/EnglishEspañolButton'


const AppRouter = () => {

    const { user } = useContext(AuthContext)

    return (
        <Router>
            <div>
                <NavBar />
                <MenuButton />
                <EnglishEspañolButton />
                <Switch>
                    <Public path="/register" component={Register} isAuth={user.logged} />
                    <Private path="/techs" component={List} isAuth={user.logged} />
                    <Route path="/home" component={LandingPage} exact />
                    <Redirect to={user.logged ? "/techs" : "/home"} />
                </Switch>
            </div>
        </Router>

    )
}

export default AppRouter
