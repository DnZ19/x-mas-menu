import React, {useEffect} from 'react';
import XmasCard from "../components/XmasCard";
import Main_XmasDay_one from "../assets/Main_gourmet.png";
import Dessert_XmasDay_one from "../assets/chocolade_rol_damme.png";
import Voorgerecht from "../assets/stok_kruidenboter.png";
import {useNavigate} from "react-router-dom";
import Footer from "../components/Footer";


function Menu() {

    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (

        <div className="font-xmas_jost mx-auto flex flex-col items-center ">

            <h1>- Christmas day -</h1>

            <XmasCard

                // Starter
                imageStarter={Voorgerecht}
                titleStarter="Stokbrood kruidenboter ala Oporto"
                descriptionStarter=
                    "Stokbroodje gedrenkt in kruidenboter vanuit een gietijzeren pannetje, zoals geserveerd bij Oporto in Groningen."
                menuStarter="Starter, XmasDay1"


                //MainCourse
                imageMain={Main_XmasDay_one}
                titleMain="Luxe Gourmet"
                descriptionMain=
                    "Op de eerste kerstdag bestaat het hoofdgerecht uit een luxe gourmet. Traditioneel en met lekker frisse groenten en andere lekkere hapjes toegevoegd."
                menuMain="Main Course, XmasDay1"


                // Desert
                imageDessert={Dessert_XmasDay_one}
                titleDessert="Chocolate rol"
                descriptionDessert=
                    "De echte Belgische chocolade rol met chocolade mouse en vruchten..."
                menuDessert="Dessert, XmasDay1"

            />

            <button
                onClick={() => navigate("/menu/dayTwo")}
                className="w-auto p-2 rounded-md bg-xmas-lightGrey text-xmas-blueMinded">Boxing Day Menu
            </button>


            <Footer/>
        </div>


    );
}

export default Menu;