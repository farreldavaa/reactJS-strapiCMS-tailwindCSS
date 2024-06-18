import React from "react";
import { Navbar, Footer, blog_content} from "../components"

const blog_contents = () => {
    return(
        <div>
            <Navbar />
            <blog_content />
            <Footer/>
        </div>
    )
}

export default blog_contents