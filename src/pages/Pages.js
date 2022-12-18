import React from 'react';
import {Route, Routes, Redirect} from "react-router-dom";
import Home from "./Home";
import Menu from "./Menu";
import Menu_two from "./Menu_two";
import LandingPage from "./LandingPage";


function Pages() {

    return (

        <Routes>
            <Route path="/" exact element={<LandingPage/>}/>
            <Route path="/home" exact element={<Home/>}/>
            <Route path="/menu/dayOne" exact element={<Menu/>}/>
            <Route path="/menu/dayTwo" exact element={<Menu_two/>}/>
        </Routes>

    );
}

export default Pages;