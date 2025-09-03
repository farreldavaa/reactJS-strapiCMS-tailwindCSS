import React from "react";
import { Navbar, MainPage, InstagramEmbed, Footer} from "../components"

const LandingPage = () => {
    return(
        <div>
            <Navbar />
            <MainPage/>
            <InstagramEmbed />
            <Footer/>
        </div>
    )
}

export default LandingPage