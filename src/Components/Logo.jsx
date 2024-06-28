import React from "react";
import blogPage from '../assets/blogPage.jpg'

function Logo({width = '100px'}) {
    return(
        <div>
            <img src={blogPage} alt="blogPage" className="w-10 rounded-full" />
        </div>
    )
}

export default Logo;