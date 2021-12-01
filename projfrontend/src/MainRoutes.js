import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Signin from "./components/auth/Signin";
import Home from "./components/Home";

const MainRoutes = () => {
    return(
        <Router>
            <Routes>
                <Route path = "/" exact element = {<Home />} />
                <Route path = "/signin" exact element = {<Signin />} />
            </Routes>
        </Router>
    )
}

export default MainRoutes;