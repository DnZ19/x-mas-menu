import React from "react";
import Pages from "../src/pages/Pages";
import './index.css';
import NavBar from "../src/components/NavBAr";

const App = () => {
    return (
        <main className="bg-xmas-darkred flex justify-center max-w-6xl lg:mx-30 px-30">
            <section className="bg-xmas-darkred w-auto h-auto md:w-screen">
                <NavBar/>
                <Pages/>
            </section>
        </main>
    );
};

export default App;