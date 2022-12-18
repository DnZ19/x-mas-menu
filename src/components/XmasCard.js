import React from 'react';


function XmasCard({

                        imageStarter, titleStarter, descriptionStarter, menuStarter,
                        imageMain, titleMain, descriptionMain, menuMain,
                        imageDessert, titleDessert, descriptionDessert, menuDessert,


                  }) {

    return (

        <main
            className="font-xmas_jost text-center shadow-lg mx-10 my-8 text- bg-xmas-lilac border-2 rounded-md h-fit max-w-sm ">

            <div className="">
                <h2 className="font-normal text-3xl mt-2 mb-2 text-black">Starter</h2>
                <img
                    src={imageStarter} alt=""
                    className="object-cover top-0 h-48 w-100 mx-auto my-5 p-2"

                />
            </div>


            <section className=" -mt-5 p-2">

                <h4 className="font-normal text-xl mb-2 text-black">{titleStarter}</h4>
                <p className="text-justify font-light mb-10">{descriptionStarter}</p>
                <p className="text-start text-sm font-thin mb-4">{menuStarter}</p>

                <div className="border-2 w-70 text-center mx-auto"></div>

            </section>

            <div>
                <h2 className="font-normal text-3xl mt-2 mb-2 text-black">Main Course</h2>
                <img
                    src={imageMain} alt=""
                    className="object-cover top-0 h-48 w-100 mx-auto my-5 p-2"

                />
            </div>


            <section className=" -mt-5 p-2">

                <h4 className="font-normal text-xl mb-2 text-black">{titleMain}</h4>
                <p className="text-justify font-light mb-10">{descriptionMain}</p>
                <p className="text-start text-sm font-thin mb-4">{menuMain}</p>

                <div className="border-2 w-70 text-center mx-auto"></div>

            </section>

            <div className="">
                <h2 className="font-normal text-3xl mt-2 mb-2 text-black">Dessert</h2>
                <img
                    src={imageDessert} alt=""
                    className="object-cover top-0 h-48 w-100 mx-auto my-5 p-2 lg:p-0"

                />
            </div>


            <section className=" -mt-5 p-2">

                <h4 className="font-normal text-xl mb-2 text-black">{titleDessert}</h4>
                <p className="text-justify font-light mb-10">{descriptionDessert}</p>
                <p className="text-start text-sm font-thin">{menuDessert}</p>

            </section>


        </main>

    );
}

export default XmasCard;