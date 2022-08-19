import React from "react";
import Logo from "../images/trollface.png";

export default function Header() {
    return (
        <div className="header">
            <div className="header-logo">
                <img className="logo" src={Logo}/>
                <h3>Meme Generator</h3>
            </div>
            <div className="header-info">
                <p>React Course - Project 3</p>
            </div>
        </div>
    )
}