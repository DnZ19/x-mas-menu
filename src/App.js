import React from "react";
import Pages from "../src/pages/Pages";
import './index.css';
import NavBar from "../src/components/NavBAr";
// import Decoration from "./assets/decoration.png";

const App = () => {
    return (
        <main className="bg-xmas-darkred flex justify-center w-screen max-w-6xl lg:mx-30 px-30 relative">
            <section className="accent-xmas-lightGrey w-screen h-auto">
                <NavBar />
                <Pages />
            </section>
        </main>
    );
};

export default App;

