import React from 'react';
import {Route, Routes, Redirect} from "react-router-dom";
import Home from "./Home";
import Menu from "./Menu";


function Pages() {

    return (

        <Routes>
            <Route path="/" exact element={<Home/>}/>
            <Route path="/home" exact element={<Home/>}/>
            <Route path="/menu" exact element={<Menu/>}/>
        </Routes>

    );
}

export default Pages;