import React from 'react';
import ServiceCard from "../components/ServiceCard";
import Design from "../assets/webdesign.png";
// import NavBAr from "../components/NavBAr";
import Footer from "../components/Footer";



function Menu() {

    return (

        <div>

            <ServiceCard
                classNameCard="mx-5 text-center shadow-lg p-10"
                image={Design}
                classNameImage="object-fill h-50 w-60 mx-auto my-10"
                title="beautiful webpages"
                description="Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit. Itaque, sapiente. Lorem ipsum dolor sit
                        amet, consectetur"
                tools="Tooling I use"
                item="React"

            />
            <ServiceCard
                classNameCard="mx-5 text-center shadow-lg p-10"
                image={Design}
                classNameImage="object-fill h-50 w-60 mx-auto my-10"
                title="beautiful webpages"
                description="Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit. Itaque, sapiente. Lorem ipsum dolor sit
                        amet, consectetur"
                tools="Tooling I use"
                item="React"

            />

            <Footer />
        </div>



    );
}

export default Menu;