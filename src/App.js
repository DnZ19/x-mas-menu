import './index.css';
import {AiFillLinkedin, AiFillYoutube} from "react-icons/ai";
import {useState} from "react";
import Avatar from "../src/assets/ReadyPlayerMe-Avatar2.png";
import Design from "../src/assets/webdesign.png"
import ServiceCard from "./components/ServiceCard";
import ReactDOM from "react-dom";
import Snowfall from "react-snowfall";

function App() {

    const [active, setActive] = useState("x");
    const [snow, setSnow] = useState(false);

    const letItSnow = () => {
        setActive("z");
        setSnow(!snow);
    }

    return (
        <main className="bg-xmas-darkred flex justify-center max-w-6xl lg:mx-30 px-30">

            {snow &&
                 <Snowfall
                    style={{
                        position: 'fixed',
                        width: '100vw',
                        height: '100vh',
                    }}
                />
            }


            <section className="bg-xmas-darkred w-auto h-auto md:w-screen">

                <nav className="py-5 mb-10 flex justify-between mx-5 md:mx-10 lg:mx-20">

                    <h1
                        className="text-xl md:text-3xl text-xmas-reddish mx-5 md:text-4xl lg:text-5xl"
                    >
                        X-Mas Menu
                    </h1>

                    <ul className="flex items-center">
                        <li
                            onClick={() => setActive("x")}
                            className={active === "x"
                                ? "bg-xmas-reddish border-xmas-white border-2 text-white mx-2 px-3 py-2 rounded-md cursor-pointer"
                                : "bg-xmas-reddish text-white mx-2 px-3 py-2 rounded-md cursor-pointer"}
                        >Home
                        </li>
                        <li
                            onClick={() => setActive("y")}
                            className={active === "y"
                                ? "bg-xmas-reddish border-xmas-white border-2 text-white mx-2 px-3 py-2 rounded-md cursor-pointer"
                                : "bg-xmas-reddish text-white mx-2 px-3 py-2 rounded-md cursor-pointer"}
                        >Menu
                        </li>
                        <li
                            onClick={letItSnow}
                            className={active === "z"
                                ? "bg-xmas-reddish border-xmas-white border-2 text-white mx-2 px-3 py-2 rounded-md cursor-pointer"
                                : "bg-xmas-reddish text-white mx-2 px-3 py-2 rounded-md cursor-pointer"}
                        >Snow
                        </li>
                    </ul>
                </nav>

                <div className="text-center">
                    <h1 className="text-4xl text-xmas-white py-4 md:text-6xl">Your chef:</h1>
                    <h3 className="text-4xl text-xmas-red py-4 md:text-5xl">Dennis</h3>
                    <p className="text-l text-xmas-white py-5 px-10 mx-12 leading-8 md:text-xl max-w-xl mx-auto">Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit. Atque eius fugit maiores qui saepe?
                        Deleniti eius eveniet officia quod voluptate.</p>
                </div>
                {/*<div className="text-4xl flex justify-center gap-10 py-3 text-gray-600">*/}
                {/*    <AiFillLinkedin/>*/}
                {/*    <AiFillYoutube/>*/}
                {/*</div>*/}

                {/*AVATAR------------------------*/}

                <div
                    className="relative bg-gradient-to-b from-xmas-white mx-auto mt-10 overflow-hidden h-80 w-80 rounded-full">
                    <img
                        className="object-fill "
                        src={Avatar}/>
                </div>



                <div className="mt-10 mx-5 text-center">
                    <h3 className="text-2xl text-gray-800 mb-4 ">Things I can do for you</h3>
                    <p className="text-md py-2 leading-8 text-gray-80">Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit. Itaque, sapiente. Lorem ipsum dolor sit
                        amet, consectetur <span className="text-teal-500">adipisicing</span> elit. Facere, magnam.</p>
                    <p className="text-md py-2 leading-8 text-gray-80">Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit. Itaque, sapiente. Lorem ipsum dolor sit
                        amet, consectetur <span className="text-teal-500">adipisicing</span> elit. Facere, magnam.</p>

                </div>

                <section >
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

                <footer className="h-20">

                </footer>


            </section>
        </main>
    );
}

export default App;
