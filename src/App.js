import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Home = lazy(() => import("./views/Home.js"));
const About = lazy(() => import("./views/About.js"));
const Music = lazy(() => import("./views/Music.js"));
const Contact = lazy(() => import("./views/Contact.js"));
const NotFound = lazy(() => import("./views/NotFound.js"));

const App = () => {
    return (
        <Router>
            <Suspense fallback={<div className="text-4xl md:text-6xl text-white flex h-screen justify-center items-center">Chargement...</div>}>
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route path="/about" component={About}></Route>
                    <Route path="/music" component={Music}></Route>
                    <Route path="/contact" component={Contact}></Route>
                    <Route path="*" component={NotFound}></Route>
                </Switch>
            </Suspense>
        </Router>
    );
};

export default App;
