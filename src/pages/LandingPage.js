import React from 'react';
import Balls from "../assets/Balls.png";
import Kerstmis from "../assets/kerstmis.png";
import {useNavigate} from "react-router-dom";

function LandingPage () {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/menu/dayOne");
    }

    return (

        <div className="h-screen flex flex-col items-center justify-start">

            <h1
                className="font-xmas my-20 text-5xl pb-10 md:text-4xl text-xmas-greyWater mx-1 lg:text-6xl"
            >
                Christmas Menu
            </h1>

            <div className="h-auto w-auto flex flex-col items-center justify-start">
                <img src={Kerstmis} alt="" className="w-auto h-auto mb-24 px-10"/>



                <button
                    className="w-60 p-4 my-auto text-m md:text-xl text-teal-900 rounded-md h-auto bg-gradient-to-b from-xmas-greyWater shadow-lg"
                    onClick={handleClick}
                >
                    Click to reveal your Christmas dinner!
                </button>


            </div>

        </div>

    );
}

export default LandingPage;