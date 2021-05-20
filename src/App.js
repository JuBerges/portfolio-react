import React, { Suspense, lazy } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import { NavMenu, Loader } from "./components/index";

const Home = lazy(() => import("./pages/Home.js"));
const Portfolio = lazy(() => import("./pages/Portfolio.js"));
const Contact = lazy(() => import("./pages/Contact.js"));
const NotFound = lazy(() => import("./pages/NotFound.js"));

const App = () => {
    return (
        <div className="relative">
            <Router>
                <NavMenu>
                    <Suspense fallback={<Loader />}>
                        <Switch>
                            <Route exact path={ROUTES.HOME} component={Home}></Route>
                            <Route path={ROUTES.PORTFOLIO} component={Portfolio}></Route>
                            <Route path={ROUTES.CONTACT} component={Contact}></Route>
                            <Route component={NotFound}></Route>
                        </Switch>
                    </Suspense>
                </NavMenu>
            </Router>
        </div>
    );
};

export default App;
