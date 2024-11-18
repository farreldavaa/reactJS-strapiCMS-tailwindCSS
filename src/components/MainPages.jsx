import React from "react";

const MainPage = () => {
    return(
        <div className="relative text-center">
            

                <img className="object-cover h-96 w-full" src="../public/images/backdrop.png" alt="Mainpage Pic" />
                <div className="w-full absolute top-0 text-center mt-20">
                        <h1 className="font-bold text-6xl">ORDYNR </h1>
                        <h1 className="font-bold text-6xl">DIECAST</h1>
                        <h1 className="font-bold text-6xl">COMMUNITY</h1>
                </div>
        </div>
    )
}

export default MainPage