import React from 'react';
import Snowfall from "react-snowfall";
import {useState} from "react";
import {useNavigate} from "react-router-dom";


function NavBar() {

    const [active, setActive] = useState("x");
    const [snow, setSnow] = useState(false);

    const navigate = useNavigate();

    const letItSnow = () => {
        setActive("snow");
        setSnow(!snow);
    }

    const handleClickMenu = () => {
        setActive("menu");
        navigate("/menu");
    }

    const handleClickHome = () => {
        setActive("home");
        navigate("/home");
    }

    return (
        <>
            {snow &&
                <Snowfall
                    style={{
                        position: 'fixed',
                        width: '100vw',
                        height: '100vh',
                    }}
                />
            }


            <nav className="py-5 mb-10 flex justify-between mx-5 md:mx-10 lg:mx-20">

                <h1
                    className="text-xl md:text-3xl text-xmas-reddish mx-5 md:text-4xl lg:text-5xl"
                >
                    X-Mas Menu
                </h1>

                <ul className="flex items-center">
                    <li
                        onClick={handleClickHome}
                        className={active === "home"
                            ? "bg-xmas-reddish border-xmas-white border-2 text-white mx-2 px-3 py-2 rounded-md cursor-pointer"
                            : "bg-xmas-reddish text-white mx-2 px-3 py-2 rounded-md cursor-pointer"}
                    >Home
                    </li>
                    <li
                        onClick={handleClickMenu}
                        className={active === "menu"
                            ? "bg-xmas-reddish border-xmas-white border-2 text-white mx-2 px-3 py-2 rounded-md cursor-pointer"
                            : "bg-xmas-reddish text-white mx-2 px-3 py-2 rounded-md cursor-pointer"}
                    >Menu
                    </li>
                    <li
                        onClick={letItSnow}
                        className={active === "snow"
                            ? "bg-xmas-reddish border-xmas-white border-2 text-white mx-2 px-3 py-2 rounded-md cursor-pointer"
                            : "bg-xmas-reddish text-white mx-2 px-3 py-2 rounded-md cursor-pointer"}
                    >

                        Snow


                    </li>
                </ul>
            </nav>

        </>


    );
}

export default NavBar;