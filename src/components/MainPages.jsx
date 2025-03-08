import React from "react";
import { useState, useEffect } from "react";

const MainPage = () => {

    const[objectPos, setObjectPos]= useState("center 85%");

    useEffect(()=>{
        const handleResize = ()=>{
            setObjectPos(window.innerWidth<640? "center 70%":"center 100%");
        };
        window.addEventListener("resize", handleResize);
        handleResize();
        return()=>window.removeEventListener("resize",handleResize);
    }, []);

    return(
        <div className="relative text-center">
            
            <div className="w-full overflow-hidden">
                <img className="w-full h-screen object-cover"
                src="../public/images/LandingPage.png"
                alt="Mainpage Pic"
                style={{objectFit:"cover", objectPosition: objectPos}}/>
            </div>        
            <div className="w-full absolute top-[30%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        {/* Logo */}
 
        <img src="../images/animated_logo_rainbow_matte.gif" alt="Logo" className="mx-auto w-24 h-24 animate-chroma" />

        {/* Heading */}
        <h1 className="font-bold text-teal-900 text-4xl sm:text-6xl">
          Welcome to the Hub!
        </h1>

        {/* Subtext */}
        <p className="text-teal-900 text-md sm:text-lg">
          a world-wide community where car culture meets creativity
        </p>

        {/* Small Footer */}
        <p className="text-teal-900 text-sm">
          by 64 Social Hub
        </p>
      </div>
        </div>
    )
}

export default MainPage