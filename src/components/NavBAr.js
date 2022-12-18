import React from 'react';
import Snowfall from "react-snowfall";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

function NavBar() {

    const [active, setActive] = useState("menuDayOne");
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [snow, setSnow] = useState(false);

    const navigate = useNavigate();

    const letItSnow = () => {
        setActive("snow");
        setSnow(!snow);
        setIsNavOpen(false);
    }

    const handleClickMenu = () => {
        setActive("menuDayOne");
        navigate("/menu/dayOne");
        setIsNavOpen(false);
    }

    const handleClickMenuDayTwo = () => {
        setActive("menuDayTwo");
        navigate("/menu/dayTwo");
        setIsNavOpen(false);
    }

    const handleClickHome = () => {
        setActive("chef");
        navigate("/home");
        setIsNavOpen(false);
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

            <nav>
                <section className="MOBILE-MENU flex lg:hidden bg-xmas-lightGrey mb-5">
                    <div
                        className="HAMBURGER-ICON space-y-2 m-10"
                        onClick={() => setIsNavOpen((prev) => !prev)}
                    >
                        <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                        <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                        <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                    </div>



                    <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
                        <div
                            className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
                            onClick={() => setIsNavOpen(false)}
                        >
                            <svg
                                className="h-8 w-8 text-gray-600"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </div>
                        <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
                            <li className="border-b border-gray-400 my-8 uppercase">
                                <p onClick={handleClickMenu}>Menu Day 1</p>
                            </li>
                            <li className="border-b border-gray-400 my-8 uppercase">
                                <p onClick={handleClickMenuDayTwo}>Menu Day 2</p>
                            </li>
                            <li className="border-b border-gray-400 my-8 uppercase">
                                <p onClick={handleClickHome}>Your Chef</p>
                            </li>
                            <li className="border-b border-gray-400 my-8 uppercase">
                                <p onClick={letItSnow}>Let it Snow!</p>
                            </li>
                        </ul>
                    </div>
                </section>

                <ul className="DESKTOP-MENU hidden space-x-8 lg:flex items-center justify-center mb-5">

                    <li
                        onClick={handleClickMenu}
                        className={active === "menuDayOne"
                            ? "bg-xmas-greyWater border-xmas-blueMinded w-16 text-center border-2 text-white mx-2 px-3 py-2 rounded-md cursor-pointer"
                            : "bg-xmas-greyWater text-white w-16 text-center mx-2 px-3 py-2 rounded-md cursor-pointer"}
                    > Day1
                    </li>
                    <li
                        onClick={handleClickMenuDayTwo}
                        className={active === "menuDayTwo"
                            ? "bg-xmas-greyWater border-xmas-blueMinded w-16 text-center border-2 text-white mx-2 px-3 py-2 rounded-md cursor-pointer"
                            : "bg-xmas-greyWater text-white w-16 text-center mx-2 px-3 py-2 rounded-md cursor-pointer"}
                    >Day2
                    </li>
                    <li
                        onClick={handleClickHome}
                        className={active === "chef"
                            ? "bg-xmas-greyWater border-xmas-blueMinded w-16 text-center border-2 text-white mx-2 px-3 py-2 rounded-md cursor-pointer"
                            : "bg-xmas-greyWater text-white w-16 text-center mx-2 px-3 py-2 rounded-md cursor-pointer"}
                    >Chef
                    </li>
                    <li
                        onClick={letItSnow}
                        className={active === "snow"
                            ? "bg-xmas-greyWater border-xmas-blueMinded w-16 text-center border-2 text-white mx-2 px-3 py-2 rounded-md cursor-pointer"
                            : "bg-xmas-greyWater text-white w-16 text-center mx-2 px-3 py-2 rounded-md cursor-pointer"}
                    >

                        Snow


                    </li>
                </ul>


            </nav>

            <style>{`
      .hideMenuNav {
        display: none;
     
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0px;
        left: 0px;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>

        </>


    );
}

export default NavBar;