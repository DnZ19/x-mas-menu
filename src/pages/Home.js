import '../index';

import Avatar from "../assets/ReadyPlayerMe-Avatar2.png";

import Footer from "../components/Footer";

function Home() {


    return (
        <div>

                <div className="font-xmas_jost text-center flex flex-col items-center">
                    <h1 className="text-4xl text-xmas-blueMinded py-4 md:text-6xl">Your chef:</h1>
                    <h3 className="text-3xl font-light text-xmas-blueMinded py-4 md:text-5xl">Dennis</h3>
                    <p className="text-justify text-l text-xmas-greyWater py-5 px-10 mx-5 leading-8 w-auto max-w-md mx-auto md:text-xl">
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

            <Footer />
        </div>
    );
}

export default Home;
