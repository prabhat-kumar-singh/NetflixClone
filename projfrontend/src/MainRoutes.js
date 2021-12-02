import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Signin from "./components/auth/Signin";
import Signup from "./components/auth/Signup";
import Home from "./components/Home";
import Admin from "./components/main/Admin";
import Create from "./components/main/adminComponents/Create";
import CreateCategory from "./components/main/adminComponents/CreateCategory";
import UpdateCategory from "./components/main/adminComponents/UpdateCategory";
import Update from "./components/main/adminComponents/Update";
import Main from "./components/main/Main";
import Default from "./components/main/mainComponents/Default";

const MainRoutes = () => {
    return(
        <Router>
            <Routes>
                <Route path = "/" exact element = {<Home />} />
                <Route path = "/signin" exact element = {<Signin />} />
                <Route path = "/signup" exact element = {<Signup />} />
                <Route path = "/main" exact element = {<Main />}>
                    <Route index element = {<Default />} />
                    <Route path = "tvshows"  element = {<Home />} />
                    <Route path = "movies"  element = {<Home />} />
                    <Route path = "recentlyAdded"  element = {<Home />} />
                    <Route path = "mylist"  element = {<Home />} />
                    <Route path = "admin" element = {<Admin />}>
                        <Route path = "create" element = {<Create />} />
                        <Route path = "update" element = {<Update />} />
                        <Route path = "createCategory" element = {<CreateCategory />} />
                        <Route path = ":categoryId/update" element = {<UpdateCategory />} />
                    </Route>
                </Route>
            </Routes>
        </Router>
    )
}

export default MainRoutes;