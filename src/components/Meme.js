import React from "react";
import TempMeme from "../images/memeimg.png"

export default function Meme() {
    return (
        <div className="meme-container">
            <img className="memeImg" src={TempMeme}/>
            <div className="Txt topTxt">Top Text</div>
            <div className="Txt bottomTxt">Bottom Text</div>
        </div>
    )
}