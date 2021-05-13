import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as ROUTES from "./constants/routes";

const Home = lazy(() => import("./pages/Home.js.js"));
const About = lazy(() => import("./pages/About.js.js"));
const Music = lazy(() => import("./pages/Music.js.js"));
const Contact = lazy(() => import("./pages/Contact.js"));
const NotFound = lazy(() => import("./pages/NotFound.js.js"));

const App = () => {
    return (
        <Router>
            <Suspense fallback={<div className="text-4xl md:text-6xl text-white flex h-screen justify-center items-center">Chargement...</div>}>
                <Switch>
                    <Route exact path={ROUTES.HOME} component={Home}></Route>
                    <Route path={ROUTES.ABOUT} component={About}></Route>
                    <Route path={ROUTES.MUSIC} component={Music}></Route>
                    <Route path={ROUTES.CONTACT} component={Contact}></Route>
                    <Route component={NotFound}></Route>
                </Switch>
            </Suspense>
        </Router>
    );
};

export default App;
