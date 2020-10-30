import React, { useContext, Suspense } from 'react';
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch
} from "react-router-dom";
import { AuthContext } from '../auth/AuthContext';
import NavBar from '../shared/UI/NavBar';
import MenuButton from '../shared/UI/Mobile/MenuButton';
import Spinner from "../shared/UI/Spinner/Spinner"
import ErrorBoundarie from '../ErrorBoundaries/ErrorBoundarie'

const LandingPage = React.lazy(() => import('../pages/LandingPage'));
const Register = React.lazy(() => import('../pages/Register'));
const List = React.lazy(() => import('../pages/List'));


const AppRouter = () => {

    const { user } = useContext(AuthContext)

    let routes

    if (user.logged) {
        routes = (
            <Switch>
                <Route path="/techs" render={() =>
                    (<Suspense fallback={<Spinner />}>
                        <ErrorBoundarie>
                            <List />
                        </ErrorBoundarie>
                    </Suspense>)} />
                <Route path="/home" render={() => (<Suspense fallback={<Spinner />}><LandingPage /></Suspense>)} />
                <Redirect to="/techs" />
            </Switch >
        )
    }
    else {
        routes = (
            <Switch>
                <Route path="/register" render={() => (<Suspense fallback={<Spinner />}><Register /></Suspense>)} />
                <Route path="/home" render={() => (<Suspense fallback={<Spinner />}><LandingPage /></Suspense>)} />
                <Redirect to="/home" />
            </Switch>
        )
    }

    return (
        <Router>
            <div>
                <NavBar />
                <MenuButton />
                {routes}
            </div>
        </Router>

    )
}

export default AppRouter


/*<div className="loading">Loading...</div>*/