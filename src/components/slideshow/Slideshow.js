import React from "react";
import "../../static/css/Slideshow.css";
import Button from "../resusable/Button";

const Slideshow = () => {


    const linkChange = () => {
        window.location.href="/products";
    }

    return (
        <div className="header_container">
            <div className="header_text_container">
                <h1>ChorBazaar</h1>
                <Button onClick={linkChange} >LET'S GO SHOPPING  </Button>
            </div>
        </div>
    );
}

export default Slideshow;