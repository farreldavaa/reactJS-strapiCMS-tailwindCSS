import React from "react";

const MainPage = () => {
    return(
        <div className="relative text-center">
            
            <div className="flex border-8 border-red-500 w-full h-96">
                <img className="flex-1 object-[center_bottom] object-cover w-full" src="../public/images/backdrop.png" alt="Mainpage Pic" />
            </div>        
                <div className="w-full absolute top-0 text-center mt-20">
                        <h1 className="font-bold text-neutral-50 text-6xl">ORDYNR </h1>
                        <h1 className="font-bold text-neutral-50 text-6xl">DIECAST</h1>
                        <h1 className="font-bold text-neutral-50 text-6xl">COMMUNITY</h1>
                </div>
        </div>
    )
}

export default MainPage