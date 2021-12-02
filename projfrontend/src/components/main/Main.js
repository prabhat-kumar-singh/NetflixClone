import React from "react"
import { Outlet } from "react-router-dom";

import Footer from "../base/Footer"
import Header from "../base/Header"
import "../../css/Main.css"



const Main = () => {
    return(
        <div className = "main-container">
            <div className = "header"> <Header /></div>
            <Outlet />
            <div className = "footer"> <Footer /></div>
        </div>
    )
}

export default Main;