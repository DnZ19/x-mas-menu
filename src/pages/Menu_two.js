import React, {useEffect} from 'react';
import XmasCard from "../components/XmasCard";
import Voorgerecht from "../assets/ei.png";
import Main_XmasDay_two from "../assets/maincourse_shortRibs.png";
import Footer from "../components/Footer";
import Dessert_XmasDay_two from "../assets/vanilleijs_boerenmeisjes.png";
import {useNavigate} from "react-router-dom";



function Menu_two() {

    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (

        <div className="font-xmas_jost mx-auto flex flex-col items-center ">

            <h1>- Boxing Day -</h1>

            <XmasCard

                // Starter
                imageStarter={Voorgerecht}
                titleStarter="Gepocheerd eitje"
                descriptionStarter=
                    "Gepocheerd eitje met asperges, wilde-paddestoelen, aardappel-schuim en paddenstoelensaus."
                menuStarter="Starter, XmasDay2"


                //MainCourse
                imageMain={Main_XmasDay_two}
                titleMain="Short ribs met gerookte aardappelpuree en gremolata"
                descriptionMain=
                    "Lekkere shortRibs aangebrand op de BBQ en slow gegaard in de oven in een bouilon met groenten. Bijgerechten zijn de bbq prei en oubergine."
                menuMain="Main Course, XmasDay2"


                // Desert
                imageDessert={Dessert_XmasDay_two}
                titleDessert="Apple vanille ijs met boeren meisjes"
                descriptionDessert=
                    "Vanillie ijs met gecaremaliseerde appel-stukjes en vruchten gecaremeliseerd in de pan..."
                menuDesert="Dessert, XmasDay2"

            />

            <button
                onClick={() => navigate("/menu/dayOne")}
                className="w-auto p-2 rounded-md bg-xmas-lightGrey text-xmas-blueMinded">Christmas Day Menu
            </button>




            <Footer/>
        </div>


    );
}

export default Menu_two;