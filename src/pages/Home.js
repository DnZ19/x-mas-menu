import '../index';

import Avatar from "../assets/ReadyPlayerMe-Avatar2.png";
import Design from "../assets/webdesign.png"

import ServiceCard from "../components/ServiceCard";
// import NavBar from "../components/NavBAr";
import Footer from "../components/Footer";

function Home() {


    return (
        <div>




                {/*<NavBar/>*/}

                <div className="text-center">
                    <h1 className="text-4xl text-xmas-white py-4 md:text-6xl">Your chef:</h1>
                    <h3 className="text-4xl text-xmas-red py-4 md:text-5xl">Dennis</h3>
                    <p className="text-l text-xmas-white py-5 px-10 mx-12 leading-8 md:text-xl max-w-xl mx-auto">
                        Every year I try to do something special with the Xmas menu. Last years it was a paper version,
                        now that I am learing more and more how to program my own pages and apps I thought it would be
                        fancy to make an online menu for you...press the snow button in the navbar for some xmas effects ;).
                    </p>
                </div>

                {/*AVATAR------------------------*/}

                <div
                    className="relative bg-gradient-to-b from-xmas-white mx-auto mt-10 overflow-hidden h-80 w-80 rounded-full">
                    <img
                        className="object-fill "
                        src={Avatar}/>
                </div>


                <div className="mt-10 mx-5 text-center">
                    <h3 className="text-4xl text-xmas-red py-4 md:text-5xl">Xmas dishes this year</h3>
                    <p className="text-l text-xmas-white py-5 px-10 mx-12 leading-8 md:text-xl max-w-xl mx-auto">This year we will have the traditional layout again a nice <span className="text-teal-500">gourmet</span> on first xmas-day.</p>
                    <p className="text-l text-xmas-white py-5 px-10 mx-12 leading-8 md:text-xl max-w-xl mx-auto">On 2nd xmas-day we will have a more <span className="text-teal-500">fancy dinner</span> which you will find the menu of under the menu, but also under this section.</p>

                </div>

                <section>

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
                </section>

            <Footer />
        </div>
    );
}

export default Home;
